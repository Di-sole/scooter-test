import styles from './ButtonApp.module.scss';

const ButtonApp = ({children}) => {
	return (
		<button type='button' className={styles.button}>
            {children}
		</button>
	)
}

export default ButtonApp;