import { Box, LinearProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearProgress />
    </Box>
  );
};

export default Loading;
