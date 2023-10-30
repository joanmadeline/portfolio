import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
// import NavigationIcon from "@mui/icons-material/Navigation";
// import NearMeIcon from "@mui/icons-material/NearMe";
// import { Icon } from "@mui/material";

export default function FloatingActionButtonExtendedSize(props) {
  const text = props.text;
  const url = props.url;
  const icon = props.icon;
  const redirect = () => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <Box sx={{ marginTop: "1rem", "& > :not(style)": { m: 0, px: 1.5 } }}>
      <Fab
        onClick={redirect}
        variant="extended"
        // size="small"
        aria-label="add"
        sx={{
          backgroundColor: "#c32148",
          transition: "0.5s",
          color: "#ffffff",
          fontSize: "1rem",
          lineHeight: "1",
          textTransform: "none",
          borderRadius: "0.5rem",
          zIndex: "0",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#c32148",
          },
        }}
      >
        {/* <Icon sx={{ mr: 1 }} /> */}
        <span className="text-2xl mr-4">{icon}</span>
        {text}
      </Fab>
    </Box>
  );
}
