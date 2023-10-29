import { useQuery } from "@tanstack/react-query";

type Props = {
  searchingFor: string | null;
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

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((data) => data.json()),
    queryKey: ["storeApi"],
  });

  console.log(error);

  if (isLoading) {
    return <div>loading...</div>;
  } else if (isError) {
    return <div>an error has occurred </div>;
  } else
    return (
      <div>
        {searchingFor}
        {data?.map((product: Product) => {
          //returned data with cards should be here wrapped with mui grid
          return <div>{product.rating.count}</div>;
        })}
      </div>
    );
};

export default StoreApi;
