import { Box, Container, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

type Props = {
  searchingFor: string;
};

type Product = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TodoApi = ({ searchingFor }: Props) => {
  const { data, isLoading } = useQuery({
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((data) => data.json()),
    queryKey: ["storeApi"],
  });

  if (isLoading) {
    return (
      <Box>
        <h1>wait bro, waiting todos</h1>
      </Box>
    );
  } else {
    return (
      <Container sx={{ marginTop: "20px" }}>
        <Grid container>
          {data
            ?.filter((item: Product) =>
              item.title.toLowerCase().includes(searchingFor.toLowerCase())
            )
            .map((product: Product) => {
              return (
                <Grid key={product.id} item xs={12} display={"flexStart"}>
                  {<h5>{product.title}</h5>}
                </Grid>
              );
            })}
        </Grid>
      </Container>
    );
  }
};

export default TodoApi;
