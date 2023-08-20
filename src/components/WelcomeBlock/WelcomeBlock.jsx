import styles from './WelcomeBlock.module.scss';
import logo from './lib/logo_black.svg';
import ButtonApp from '../ButtonApp/ButtonApp';

const WelcomeBlock = () => {
	return (
		<div className={styles.welcome}>
			<div className={styles.welcome__wrapper}>
				<div className={styles.welcome__content}>
					<img className={styles.welcome__logo} src={logo} alt='logo' />
					<h1 className={styles.welcome__title}>Вступайте в клуб Самокатов</h1>
					<p className={styles.welcome__text}>
						Купите абонемент, чтобы стать частью клуба в новом сезоне–2024.<br/>
						8 месяцев за 
						<span className={styles.welcome__price}>499₽</span>
					</p>				
					<div className={styles.welcome__button}>
						<ButtonApp>Стать частью клуба</ButtonApp>	
					</div>					
				</div>
				<div className={styles.welcome__images}>
					<div className={styles.welcome__blur}></div>
					<div className={styles.welcome__img}></div>
				</div>
			</div>
			
			<div className={[styles.welcome__background, styles.background].join(' ')}>
				<div className={styles.background__gradient}></div>
			</div>
		</div>
	)
}

export default WelcomeBlock;