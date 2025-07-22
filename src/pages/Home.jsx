import React from 'react';
import styles from '../styles/Home.module.css';
import Slideshow from '../components/Slideshow';

const images = [
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/01.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/02.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/03.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/04.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/05.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/06.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/07.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/08.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/09.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/10.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/11.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/12.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/13.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/14.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/15.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/16.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/17.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/18.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/19.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/20.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/21.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/22.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/23.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/24.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/25.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/26.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/27.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/28.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/29.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/30.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/31.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/32.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/33.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/34.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/35.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/36.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/37.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/38.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/39.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/40.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/41.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/42.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/43.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/44.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/45.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/46.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/47.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/48.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/49.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/50.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/51.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/52.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/53.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/54.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/55.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/56.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/57.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/58.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/59.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/60.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/61.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/62.jpeg",
  "https://raw.githubusercontent.com/Jamahl/jbfinejewellery/refs/heads/main/assets/v2/63.jpeg"
];

const Home = () => (
  <>
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>Discover Timeless Jewellery</h1>
        <p>Custom made, hand crafted jewellery made in Bangkok..</p>
      </div>
    </section>
    <Slideshow images={images} />
  </>
);

export default Home;
