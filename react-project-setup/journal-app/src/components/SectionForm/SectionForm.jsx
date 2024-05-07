import  Input from "../Input/Input.jsx";

export default function SectionForm() {
	return (
		<section className="section__form">
			<h2>NEW ENTRY</h2>
			<form>
			<Input></Input>
				<label htmlFor="input__motto">Motto</label>
				<input id="input__motto" type="text"></input>
				<label htmlFor="input__notes">Notes</label>
				<input id="input__notes" type="text"></input>
				<button type="submit">Create</button>
			</form>
		</section>
	);
}
