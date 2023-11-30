import { useQuery } from "@tanstack/react-query";
import Loading from "../components/loading";

const RecipesApi = () => {
  const { data, isLoading } = useQuery({
    queryFn: () =>
      fetch("https://usman-fake-api.herokuapp.com/api/recipes").then((data) =>
        data.json()
      ),
    queryKey: ["recipes"],
  });

  if (isLoading) return <Loading />;
  else return <p>loaded</p>;
};

export default RecipesApi;
