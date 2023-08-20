import { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import img01 from '../lib/01.jpg';
import img02 from '../lib/02.jpg';
import img03 from '../lib/03.jpg';
import img04 from '../lib/04.jpg';

const Carousel = () => {
	const images = [img01, img02, img03, img04];
	const [currentImg, setCurrentImg] = useState();
  const [currentPos, setCurrentPos] = useState(0);

  useEffect(() => {
    setCurrentImg(images.slice(currentPos, currentPos + 1));
  }, [currentPos]);

  const changeCurrentImg = (direction) => {
    setCurrentPos(currentPos + direction);
  };

	return (
		<div className={styles.carousel}>
			<div className={styles.carousel__wrapper}>
				<div className={styles.carousel__item}>
					<img src={currentImg} alt='' />
				</div>
			</div>
			
			<div className={styles.buttons}>
				<button 
					className={[styles.buttons__button, styles.buttons__button_prev].join(' ')}
					type='button' 
					disabled={currentPos > 0 ? false : true} 
					onClick={() => changeCurrentImg(-1)}>
				</button>
				<button 
					className={[styles.buttons__button, styles.buttons__button_next].join(' ')}
					type='button' 
					disabled={currentPos < images.length - 1 ? false : true} 
					onClick={() => changeCurrentImg(1)}>
				</button>
			</div>
		</div>
	)
}

export default Carousel;
