import styles from './SubscriptionRowTop.module.scss';

const SubscriptionRowTop = () => {
	return (
		<div className={styles.rowTop}>
			<div className={styles.rowTop__content}>
				<h2 className={styles.rowTop__title}>
					Купить абонемент и вступить в клуб смогут те, кто в Плюсе
				</h2>
				<p className={styles.rowTop__text}>
					За каждую поездку на самокатах такие пользователи получают кешбэк баллами. 
					Баллы можно тратить на поездки на самокатах и такси с Яндекс Go, 
					покупки и заказы в других сервисах Яндекса
				</p>					
			</div>
			<div className={styles.rowTop__background}>
				<div className={styles.rowTop__blur}></div>
				<div className={styles.rowTop__img}></div>
			</div>
		</div>
	)
}

export default SubscriptionRowTop;