import { useEffect, useState } from 'react';
import { throttle } from '../../../utils/throttle';
import './button-go-top.css';

export default function ButtonGoTop() {
  const [isButtonVisible, setButtonVisible] = useState(false);

  const checkerScrollY = throttle(() => {
    const scrolledY = window.scrollY;
    const viewHeight = window.innerHeight;

    setButtonVisible(scrolledY > viewHeight);
  }, 200);

  const handleToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', checkerScrollY);
    return () => {
      window.removeEventListener('scroll', checkerScrollY);
    };
  }, []);

  return (
    <button
      type='button'
      className={`button-top ${isButtonVisible ? 'button-top--active' : ''}`}
      onClick={handleToTop}
    >
      <span className='button-top__arrow' />
    </button>
  );
}
