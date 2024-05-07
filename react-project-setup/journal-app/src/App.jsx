import "./App.css";
import Header from "./components/Header/Header.jsx";
import SectionForm from "./components/SectionForm/SectionForm.jsx";
import SectionCounters from "./components/SectionCounters/SectionCounters.jsx";
import SectionJournal from "./components/SectionJournal/SectionJournal.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
	return (
		<>
			<Header />

			<main>
				<SectionForm />

				<SectionCounters />

				<SectionJournal />
				<SectionJournal />
				<SectionJournal />
			</main>

			<Footer>
				<p>journal App – 2028</p>
			</Footer>
		</>
	);
}

export default App;
