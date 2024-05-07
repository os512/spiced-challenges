import "./App.css";
import star_filled from "./assets/star-filled.svg";
import star_transparent from "./assets/star.svg";

function App() {
	return (
		<>
			<header>
				<h1>JOURNAL</h1>
			</header>
			<main>
				<section>
					<h2>NEW ENTRY</h2>
					<form>
						<label htmlFor="input__motto">Motto</label>
						<input id="input__motto" type="text"></input>
						<label htmlFor="input__notes">Notes</label>
						<input id="input__notes" type="text"></input>
						<button type="submit">Create</button>
					</form>
				</section>

				<section>
					<label htmlFor="count__entries">All Entries</label>
					<p id="count__entries">3</p>
					<label htmlFor="count__favorites">Favorites</label>
					<p id="count__favorites">1</p>
				</section>
				<section className="section__journal">
					<h3>FEB 27, 2028</h3>
					<h4>&quot;That&apos;s life in the city&quot;</h4>
					<img src={star_filled} alt="Star filled"></img>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, cumque assumenda
						magni aliquid inventore amet cupiditate consequatur possimus officiis reiciendis ut
						voluptatum labore laborum ipsum voluptas laudantium illum.
					</p>
				</section>

				<section className="section__journal">
					<h3>FEB 26, 2028</h3>
					<h4>&quot;That&apos;s life in the city&quot;</h4>
					<img src={star_transparent} alt="Star filled"></img>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, cumque assumenda
						magni aliquid inventore amet cupiditate consequatur possimus officiis reiciendis ut
						voluptatum labore laborum ipsum voluptas laudantium illum.
					</p>
				</section>

        <footer>
          journal App – 2028
        </footer>
			</main>
		</>
	);
}

export default App;
