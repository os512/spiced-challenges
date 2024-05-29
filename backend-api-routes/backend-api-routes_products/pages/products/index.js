import useSWR from "swr";

export default function Products() {
  const URL = "/api/products";

  const fetcher = async (url) => {
    const data = await fetch(url);

    if (!data.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await data.json();
      error.status = data.status;
      throw error;
    }

    return data.json();
  };
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      {data.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>id: {product.id}</p>
          <p>Description: {product.description}</p>
          <p>
            Price: {product.price} {product.currency}
          </p>
        </div>
      ))}
    </>
  );
}
