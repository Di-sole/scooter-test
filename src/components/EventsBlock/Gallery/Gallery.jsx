import styles from './Gallery.module.scss';
import img01 from '../lib/01.jpg';
import img02 from '../lib/02.jpg';
import img03 from '../lib/03.jpg';
import img04 from '../lib/04.jpg';

const Gallery = () => {
	return (
		<div className={styles.gallery}>
			<div className={styles.gallery__wrapper}>
				<div className={[styles.gallery__column, styles.gallery__column_1].join(' ')}>
					<div className={[styles.gallery__item, styles.gallery__point].join(' ')}>
						<img src={img01} alt='' />
					</div>
					<div className={styles.gallery__item}>
						<img src={img04} alt='' />
					</div>
				</div>
				<div className={styles.gallery__column}>
					<div className={[styles.gallery__item, styles.gallery__drops].join(' ')}>
						<img src={img02} alt='' />
					</div>
					<div className={[styles.gallery__item, styles.gallery__cup].join(' ')}>
						<img src={img03} alt='' />
					</div>	
				</div>				
			</div>
		</div>
	)
}

export default Gallery;