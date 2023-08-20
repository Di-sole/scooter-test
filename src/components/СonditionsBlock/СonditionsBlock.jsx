import styles from './СonditionsBlock.module.scss';

const ConditionsBlock = () => {
	return (
		<section className={styles.conditions}>
			<div className={styles.conditions__text}>
				Доп. опция «Абонемент на самокаты» на 8 месяцев (240 дней) активируется автоматически с момента старта сезона 
				2024 г. самокатов Яндекс Go, далее предусмотрено автопродление доп.опции за 399 руб./мес. 
				Сертификат на доп.опцию «Абонемент на самокаты» на 8 месяцев оформляется на условиях документа 
				<a href='https://yandex.ru/legal/scooters_seasonpass/' target="_blank" rel="noreferrer">yandex.ru/legal/scooters_seasonpass</a>. 
				Доп.опция доступна пользователям с активной подпиской (условия подписки: 
				<a href='https://yandex.ru/legal/yandex_plus_conditions' target="_blank" rel="noreferrer">yandex.ru/legal/yandex_plus_conditions</a>), 
				есть ограничения, подробнее: 
				<a href='https://yandex.ru/legal/yandex_plus_opzii_list' target="_blank" rel="noreferrer">yandex.ru/legal/yandex_plus_opzii_list</a>. 
				В случае отсутствия у пользователя активной подписки на дату активации доп.опции, пользователю предоставляется 7 дней подписки Яндекс Плюс бесплатно, 
				далее автопродление — 299 руб./мес. Электросамокаты Яндекс Go — сервис аренды электросамокатов на условиях: clck.ru/gwDGn. 0+
			</div>
		</section>
	)
}

export default ConditionsBlock;