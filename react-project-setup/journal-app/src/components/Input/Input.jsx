export default function Input({ children, id }) {
	return (
		<>
			<label htmlFor="input__motto">{children}</label>
			<input id={id} type="text"></input>
		</>
	);
}
