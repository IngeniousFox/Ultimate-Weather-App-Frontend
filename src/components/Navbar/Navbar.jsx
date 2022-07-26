import styles from "./Navbar.module.css"
import {UnitSelector} from "../UnitSelector/UnitSelector";

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<h1 className={styles.title}>Ultimate Weather App</h1>

			<div>
				<input className={styles.search} type="text" placeholder="Search your city" />
			</div>

			<div className={styles.selectorsContainer}>
				<UnitSelector />
			</div>
		</nav>
	)
}