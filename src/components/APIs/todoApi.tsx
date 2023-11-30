import { Container, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Todo from "../components/todoList";
import Loading from "../components/loading";

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
      fetch("https://jsonplaceholder.typicode.com/todos").then((data) =>
        data.json()
      ),
    queryKey: ["todosApi"],
  });

  if (isLoading) {
    return <Loading />;
  } else {
    console.log(data);

    return (
      <Container sx={{ marginTop: "20px" }}>
        <Grid container>
          {data
            ?.filter((item: Product) =>
              item.title.toLowerCase().includes(searchingFor.toLowerCase())
            )
            .map((todo: Product) => {
              return (
                <Grid key={todo.id} item xs={12} display={"flexStart"}>
                  {
                    <Todo
                      id={todo.id}
                      userID={todo.userId}
                      title={todo.title}
                      completed={todo.completed}
                    />
                  }
                </Grid>
              );
            })}
        </Grid>
      </Container>
    );
  }
};

export default TodoApi;
