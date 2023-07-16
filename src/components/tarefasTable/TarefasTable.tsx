import React, { useState, useEffect } from "react";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { Tarefa } from "./Tarefa";

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination,
  useTheme,
  Typography,
} from "@mui/material";

import { IListaTarefasData } from "../../services/tarefasServices/TarefasServices";
import { useHandleTarefas } from "../../hooks/useHandleTarefas";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

interface ITarefasTableProps {
  lista: IListaTarefasData[];
  setTargetTarefa: React.Dispatch<React.SetStateAction<IListaTarefasData>>;
  setModalOption: React.Dispatch<React.SetStateAction<string>>;
  handleOpen: () => void;
  handleClose: () => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export const TarefasTable = ({
  lista,
  setTargetTarefa,
  setModalOption,
  handleClose,
  handleOpen,
}: ITarefasTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handlePageChange = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <TableContainer
      variant="outlined"
      component={Paper}
      sx={{
        marginTop: 5,
        maxWidth: 750,
        width: "90%",
        marginX: "auto",
        borderRadius: 3,
      }}
    >
      <Table aria-label="simple table">
        {lista.length === 0 ? (
          <caption>
            <Typography textAlign={"center"} variant="h6">
              Não há nada para fazer.
            </Typography>
          </caption>
        ) : (
          <>
            <TableHead>
              <TableRow>
                <TableCell>Tarefa</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Opções</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? lista.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : lista
              ).map((tarefa) => (
                <Tarefa
                  key={tarefa.id}
                  id={tarefa.id}
                  titulo={tarefa.titulo}
                  description={tarefa.description}
                  status={tarefa.status}
                  setTargetTarefa={setTargetTarefa}
                  setModalOption={setModalOption}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[4]}
                  count={lista.length}
                  onPageChange={handlePageChange}
                  rowsPerPage={4}
                  page={page}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </>
        )}
      </Table>
    </TableContainer>
  );
};
