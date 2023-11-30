import { useQuery } from "@tanstack/react-query";
import ImgMediaCard from "../components/card";
import { Container, Grid } from "@mui/material";
import Loading from "../components/loading";

type Props = {
  searchingFor: string;
};

const StoreApi = ({ searchingFor }: Props) => {
  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };

  const { data, isLoading, isError } = useQuery({
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((data) => data.json()),
    queryKey: ["storeApi"],
  });

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <div>an error has occurred </div>;
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
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  {ImgMediaCard({
                    title: product.title,
                    description: product.description,
                    url: product.image,
                  })}
                </Grid>
              );
            })}
        </Grid>
      </Container>
    );
  }
};

export default StoreApi;
