import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function ISSTracker() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { longitude, latitude } = data;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
