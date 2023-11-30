import { Container, Stack } from "@mui/material";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "./useContext/context";

const Search = () => {
  const searchContext = useContext(SearchContext);

  useEffect(() => {
    console.log(searchContext?.search);
  }, [searchContext?.search]);

  return (
    <Container maxWidth="sm">
      <h3>Start searching </h3>

      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={2}
        direction="row"
      >
        <Link to="/recipes">
          <Button variant="contained">recipes</Button>
        </Link>
        <Link to="/store">
          <Button variant="contained">store</Button>
        </Link>
        <Link to="/todos">
          <Button variant="contained">Todos</Button>
        </Link>
      </Stack>
      <Input
        placeholder="search..."
        onChange={(e) => searchContext?.setSearch(e.target.value)}
      />
    </Container>
  );
};

export default Search;
