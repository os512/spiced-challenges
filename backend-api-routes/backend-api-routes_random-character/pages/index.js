import useSWR from "swr";

export default function HomePage() {
  const URL = "/api/random-character";

  const fetcher = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error("An error occurred while fetching the response.");
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }

    return response.json();
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
