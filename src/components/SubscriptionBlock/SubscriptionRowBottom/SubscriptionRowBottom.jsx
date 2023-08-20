import ButtonApp from '../../ButtonApp/ButtonApp';
import styles from './SubscriptionRowBottom.module.scss';

const SubscriptionRowBottom = () => {
	return (
		<div className={styles.rowBottom}>
			<div className={styles.rowBottom__background}>
				<div className={styles.rowBottom__blur}></div>
				<div className={styles.rowBottom__img}></div>
			</div>
			<div className={styles.rowBottom__content}>
				<h2 className={styles.rowBottom__title}>
					80  % наших пользователей уже в клубе и экономят на поездках
				</h2>
				<p className={styles.rowBottom__text}>
					Присоединяйтесь — опция начнёт действовать в начале сезона–2024. 
					Об открытии сезона предупредим заранее, чтобы вы были готовы
				</p>
				<ButtonApp>Хочу абонемент</ButtonApp>		
			</div>
		</div>
	)
}

export default SubscriptionRowBottom;