import AdvantagesCardsList from './AdvantageCardsList/AdvantageCardsList';
import styles from './AdvantagesBlock.module.scss';

const AdvantagesBlock = () => {
	return (
		<section className={styles.advantages}>
			<h2 className={styles.advantages__title}>Вот что даёт участие в клубе</h2>
			<AdvantagesCardsList />
		</section>
	)
}

export default AdvantagesBlock;