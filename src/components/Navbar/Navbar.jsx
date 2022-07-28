import styles from "./Navbar.module.css"
import {UnitSelector} from "../UnitSelector/UnitSelector";
import {SearchBar} from "../SearchCities/SearchBar/SearchBar.jsx";

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<h1 className={styles.title}>Ultimate Weather App</h1>

			<div className={styles.searchbarContainer}>
				<SearchBar />
			</div>

			<div className={styles.selectorsContainer}>
				<UnitSelector />
			</div>
		</nav>
	)
}