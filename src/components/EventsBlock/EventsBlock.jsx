import Carousel from './Carousel/Carousel';
import styles from './EventsBlock.module.scss';
import Gallery from './Gallery/Gallery';

const EventsBlock = () => {
	return (
		<section className={styles.events}>
			<h2 className={styles.events__title}>Эксклюзивный доступ к событиям Самокатов</h2>
			<p className={styles.events__text}>
				С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч. 
				В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем Мезенцевым и слушали хор Attaque de Panique
			</p>
			<Gallery />
			<Carousel />
		</section>
	)
}

export default EventsBlock;