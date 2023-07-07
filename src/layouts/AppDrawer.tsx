import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";

import Button from "@mui/material/Button";
import ChecklistRtlRoundedIcon from "@mui/icons-material/ChecklistRtlRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { List, ListItem } from "@mui/material";

export const AppDrawer = () => {
  const [status, setStatus] = useState(false);

  const [listItems, setListItems] = useState(["Tarefas"]);

  return (
    <div>
      <Button onClick={() => setStatus(!status)}>
        <MenuIcon sx={{ color: "white", fontSize: 44 }} />{" "}
      </Button>
      <Drawer onClose={() => setStatus(!status)} open={status}>
        <List>
          <ListItem>
            <Button
              variant="text"
              sx={{ width: "100%" }}
              startIcon={<ChecklistRtlRoundedIcon />}
            >
              Tarefas
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
