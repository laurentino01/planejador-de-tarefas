import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";

import Button from "@mui/material/Button";
import ChecklistRtlRoundedIcon from "@mui/icons-material/ChecklistRtlRounded";
import MenuIcon from "@mui/icons-material/Menu";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";

export const AppDrawer = () => {
  const [status, setStatus] = useState(false);

  const [listItems, setListItems] = useState([
    { name: "tarefas", icon: <ChecklistRtlRoundedIcon /> },
  ]);

  return (
    <div>
      <Button onClick={() => setStatus(!status)}>
        <MenuIcon sx={{ color: "white", fontSize: 44 }} />{" "}
      </Button>
      <Drawer
        onClose={() => setStatus(!status)}
        open={status}
        sx={{ width: "80vw" }}
      >
        <List sx={{ marginTop: "40px" }}>
          {listItems.map((item) => (
            <ListItem
              sx={{
                width: "50vw",
              }}
              key={item.name}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography variant="h6"> Tarefas</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
