import styles from "./css/CatagoriesCard.module.css";
import { FiArrowUpRight } from "react-icons/fi";

const CatagoriesCard = ({ image, Text }) => {
  return (
    <div className={styles.CatagoriesCard}>
      <img src={image} alt="product demo image" />
      <button className={` Albert-normal ${styles.CardText}`}>
        <p>{Text}</p>
        <span><FiArrowUpRight /></span>

      </button>
    </div>
  )
}

export default CatagoriesCard;
