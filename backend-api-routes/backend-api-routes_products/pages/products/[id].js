import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const URL = `/api/products/${id}`;

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
      <div key={data.id}>
        <h3>{data.name}</h3>
        <p>id: {data.id}</p>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
      </div>
    </>
  );
}
