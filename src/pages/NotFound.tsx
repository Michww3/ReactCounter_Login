import React from "react";
import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <Typography variant="h3">404 – страница не найдена</Typography>
    </Box>
  );
}