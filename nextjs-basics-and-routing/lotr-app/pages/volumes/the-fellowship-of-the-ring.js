import { volumes } from "../lib/data";
import Link from "next/link";
import Image from "next/image";

const volume = volumes.find(
  (volume) => volume.slug === "the-fellowship-of-the-ring"
);

export default function TheFellowshipOfTheRing() {
  return (
    <>
      <Link href="./">Back to Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, idx) => {
          return (
            <div key={idx}>
              <li>
                <p>{book.ordinal}</p>
                <p>{book.title}</p>
              </li>
            </div>
          );
        })}
      </ul>
      <Image src={volume.cover} alt={volume.title} width="140" height="230" />
    </>
  );
}
