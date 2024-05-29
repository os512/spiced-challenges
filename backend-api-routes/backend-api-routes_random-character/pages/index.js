import useSWR from "swr";

export default function HomePage() {
  const URL = "/api/random-character";

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

  const { firstName, lastName, twitterName, geohash } = data;

  return (
    <>
      <p>firstname: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>twitterName: {twitterName}</p>
      <p>geohash: {geohash}</p>
    </>
  );
}
