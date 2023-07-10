import React, { useState } from "react";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Add } from "@mui/icons-material";

import { Tarefa } from "../Tarefa";

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
} from "@mui/material";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
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

export const TarefasTable = ({ lista, openModal, setTargetTarefa }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handlePageChange = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <TableContainer
      component={Box}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={5}
    >
      <Table
        component={Paper}
        variant="elevation"
        sx={{
          maxWidth: 900,
          minWidth: 425,
          marginX: 10,
          borderRadius: 3,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Tarefa</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Opções</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? lista.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : lista
          ).map((tarefa) => (
            <Tarefa
              key={tarefa.id}
              id={tarefa.id}
              title={tarefa.title}
              description={tarefa.description}
              completed={tarefa.completed}
              openModal={openModal}
              setTargetTarefa={setTargetTarefa}
            />
          ))}
          {/* <TableRow>
            <TableCell colSpan={2}>Nova tarefa... </TableCell>

            <TableCell>
              <Button
                onClick={() =>
                  openModal(0, "string", "string", false, "create")
                }
              >
                <Add></Add>
              </Button>
            </TableCell>
          </TableRow> */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={lista.length}
              onPageChange={handlePageChange}
              rowsPerPage={5}
              page={page}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
