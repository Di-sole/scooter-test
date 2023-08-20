import styles from './AdvantageCard.module.scss';

const AdvantageCard = ({icon, children}) => {
	return (
		<div className={styles.card}>
      <img className={styles.card__img} src={icon} alt='icon' />
      <p className={styles.card__text}>
        {children}  
      </p>
		</div>
	)
}

export default AdvantageCard;