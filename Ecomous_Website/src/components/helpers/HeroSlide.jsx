import styles from "./css/HeroSlide.module.css";
import { FaAngleRight } from "react-icons/fa";

const HeroSlide = ({ imagePath, tittle, description, altText }) => {
  tittle = tittle.split(" ");
  return (
    <div className={styles.HeroContainer}>
      <img src={imagePath} alt={altText} />
      <div className={styles.HeroTextBox} >
        <h2>
          {tittle[0]} <br /> {tittle[1]}
        </h2>
        <p>{description}</p>
        <button>
          <span>Shop collection</span>
          <span className={styles.arrowRight}>
            <FaAngleRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSlide;
