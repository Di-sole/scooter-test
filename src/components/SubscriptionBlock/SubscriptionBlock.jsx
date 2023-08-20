import styles from './SubscriptionBlock.module.scss';
import SubscriptionRowBottom from './SubscriptionRowBottom/SubscriptionRowBottom';
import SubscriptionRowTop from './SubscriptionRowTop/SubscriptionRowTop';

const SubscriptionBlock = () => {
	return (
		<section className={styles.subscription}>
			<SubscriptionRowTop />
			<SubscriptionRowBottom />
		</section>
  )
}

export default SubscriptionBlock;