import AdvantageCard from '../AdvantageCard/AdvantageCard';
import rub from '../lib/rub.png';
import scooter from '../lib/scooter.png';
import clock from '../lib/clock.png';
import battery from '../lib/battery.png';
import styles from './AdvantageCardsList.module.scss';

const AdvantagesCardsList = () => {
	return (
		<ul className={styles.list}>
			<li className={styles.list__elem}>
				<AdvantageCard icon={rub}>
					0 ₽ за старт в каждой поездке
				</AdvantageCard>
			</li>
			<li className={styles.list__elem}>
				<AdvantageCard icon={scooter}>
					Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с абонементом — так у всех будет бесплатный старт
				</AdvantageCard>
			</li>
			<li className={styles.list__elem}>
				<AdvantageCard icon={clock}>
					Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть
				</AdvantageCard>
			</li>
			<li className={styles.list__elem}>
				<AdvantageCard icon={battery}>
					Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените по пути на другой — это бесплатно
				</AdvantageCard>
			</li>
		</ul>
	)
}

export default AdvantagesCardsList;