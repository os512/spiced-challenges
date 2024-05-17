// import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import useLocalStorage from "use-local-storage";
import "./App.css";

export default function App() {
	const [note, setNote] = useLocalStorage("note", { defaultValue: "" });
	const [font, setFont] = useLocalStorage("font", { defaultValue: "system-ui" });

	function handleNoteChange(newNote) {
		setNote(newNote);
	}

	function handleFontChange(newFont) {
		setFont(newFont);
	}

	return (
		<div className="app" style={{ "--font": font }}>
			<FontSelector font={font} onFontChange={handleFontChange} />
			<Note note={note} onNoteChange={handleNoteChange} />
		</div>
	);
}
