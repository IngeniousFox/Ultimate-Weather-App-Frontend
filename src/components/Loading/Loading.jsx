import styles from "./Loading.module.css"

export const Loading = () => {
	return (
		<div className={styles.loadingContainer}>
			<div className={styles.ldsDualRing}></div>
        </div>
	)
}