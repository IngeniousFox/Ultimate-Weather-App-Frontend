import styles from "./Alert.module.css"
import {useState} from "react";
import {AlertContent} from "../AlertContent/AlertContent";

export const Alert = ({alert}) => {

    const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.alert}>
            <div className={styles.titleContainer} onClick={() => setIsOpen(open => !open)}>
                <h3 className={styles.title}>{alert.event}</h3>
                <span className={styles.collapse}>{(isOpen) ? "-" : "+"}</span>
            </div>

            {
                (isOpen) ? (<AlertContent alert={alert} />) : null
            }
        </div>
	)
}