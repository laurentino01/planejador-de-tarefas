import { SvgIcon } from "@mui/material";
import React from "react";

export const MoonIcon = () => {
  return (
    <SvgIcon>
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#F49034" />
        <g clip-path="url(#clip0_14_474)">
          <path
            d="M12 5C10.18 5 8.47 5.5 7 6.35C9.99 8.08 12 11.3 12 15C12 18.7 9.99 21.92 7 23.65C8.47 24.5 10.18 25 12 25C17.52 25 22 20.52 22 15C22 9.48 17.52 5 12 5Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_474">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(2 3)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
