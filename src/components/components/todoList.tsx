import { Box, Checkbox, Divider, Stack, Typography } from "@mui/material";

type todo = {
  id: number;
  userID: number;
  title: string;
  completed: boolean;
};

const Todo = ({ id, userID, title, completed }: todo) => {
  return (
    <Box
      display={"flex"}
      minWidth={"200px"}
      border={"1px solid gray"}
      borderRadius={"10px"}
      margin={"5px"}
    >
      <Stack width={"12%"} display={"flex"} flexDirection={"column"}>
        <Typography fontSize={"20px"}>
          <i>userID</i>
        </Typography>
        <Typography fontSize={"25px"}>{userID}</Typography>
      </Stack>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Stack width={"76%"} display={"flex"} flexDirection={"column"}>
        <Typography fontSize={"20px"}>
          <i>title</i>
        </Typography>
        <Typography fontSize={"20px"}>{title}</Typography>
      </Stack>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Stack width={"12%"} display={"flex"} flexDirection={"column"}>
        <Typography fontSize={"20px"}>
          <i>completed</i>
        </Typography>
        <Typography fontSize={"25px"}>
          {completed ? <Checkbox defaultChecked /> : <Checkbox />}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Todo;
