'use client';
import React, { useState, useEffect, MouseEvent } from 'react';
import styles from './styles/page.module.scss';
import Paragraph from './components/Paragraph';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [windowsWidth, setWindowsWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowsWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBlocks = (): JSX.Element[] => {
    const blockSize: number = windowsWidth * 0.05;
    const nbOfBlocks: number = Math.ceil(window.innerHeight / blockSize);

    return Array.from(Array(nbOfBlocks).keys()).map((_, index) => (
      <div
        onMouseEnter={(e: MouseEvent<HTMLDivElement>) =>
          colorize(e.currentTarget)
        }
        key={index}
        style={{ width: blockSize, height: blockSize }}
      ></div>
    ));
  };

  const colorize = (el: HTMLElement): void => {
    el.style.backgroundColor = '#FEFCE8';

    setTimeout(() => {
      el.style.backgroundColor = 'transparent';
    }, 300);
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Paragraph />
      </div>
      <div className={styles.grid}>
        {windowsWidth > 0 &&
          Array.from(Array(20).keys()).map((_, index) => (
            <div key={`b${index}`} className={styles.column}>
              {getBlocks()}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
