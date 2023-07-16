import { SxProps } from "@mui/system";

export const switchStyle: SxProps = {
  "& .MuiButtonBase-root ": {
    padding: "1px",
    top: "30%",
    left: "10px",
  },
  "& .MuiButtonBase-root.Mui-checked ": {
    padding: "1px",
    top: "30%",
    left: "10px",
  },
  "& .MuiSwitch-track": {
    width: "70px",
    height: "20px",
    borderRadius: "13px",
    opacity: 1,
    backgroundColor: "black",
  },
  "& .css-147uapr-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track ":
    {
      width: "70px",
      height: "20px",
      borderRadius: "13px",
      opacity: 1,
      backgroundColor: "white",
    },
};
