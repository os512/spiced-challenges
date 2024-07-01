import { introduction } from "../lib/data";
import { volumes } from "../lib/data";
import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume, idx) => {
          console.log(volume.slug);

          return (
            <li key={idx}>
              <Link href={`../volumes/${volume.slug}`}>
                {volume.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
