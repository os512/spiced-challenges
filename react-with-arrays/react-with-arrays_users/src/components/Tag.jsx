import "./Tag.css";

export default function Tag({ tag }) {
  return (
    <li className={`Tag ${tag === "admin" ? "tag--highlight" : ""}`}>{tag}</li>
  );
}
