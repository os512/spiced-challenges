import { volumes } from "../lib/data";
import Link from "next/link";
import Image from "next/image";

const volumeIndex = volumes.findIndex(
  (volume) => volume.slug === "the-return-of-the-king"
);
const volume = volumes[volumeIndex];

const nextVolume = volumes[volumeIndex + 1];
const previousVolume = volumes[volumeIndex - 1];

export default function TheReturnOfTheKing() {
  return (
    <>
      <Link href="./">Back to Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => {
          return (
            <li key={book.title}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image src={volume.cover} alt={volume.title} width="140" height="230" />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
