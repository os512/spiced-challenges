import { volumes } from "../lib/data";
import Link from "next/link";
import Image from "next/image";

const volume = volumes.find((volume) => volume.slug === "the-two-towers");

export default function TheTwoTowers() {
  return (
    <>
      <Link href="./">Back to Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, idx) => {
          return (
            <li key={idx}>
              <p>{book.ordinal}</p>
              <p>{book.title}</p>
            </li>
          );
        })}
      </ul>
      <Image src={volume.cover} alt={volume.title} width="140" height="230" />
    </>
  );
}
