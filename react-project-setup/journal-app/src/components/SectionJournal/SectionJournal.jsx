import star_filled from "../../assets/star-filled.svg";
import star_transparent from "../../assets/star.svg";

export default function SectionJournal() {
	return (
		<section className="section__journal">
			<h3>FEB 27, 2028</h3>
			<h4>&quot;That&apos;s life in the city&quot;</h4>
			<img src={star_filled ?? star_transparent} alt="Star filled"></img>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, cumque assumenda magni
				aliquid inventore amet cupiditate consequatur possimus officiis reiciendis ut voluptatum
				labore laborum ipsum voluptas laudantium illum.
			</p>
		</section>
	);
}
