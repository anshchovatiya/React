import styles from "./css/CatagoriesCard.module.css";
import { FiArrowUpRight } from "react-icons/fi";

const CatagoriesCard = ({ image, Text }) => {
  return (
    <div className={styles.CatagoriesCard}>
      <div className="overflow-hidden">
      <img src={image} alt="product demo image" className="hover:scale-[1.04] duration-1000"/>
      </div>
      <button className={` Albert-normal ${styles.CardText}`}>
        <p>{Text}</p>
        <span><FiArrowUpRight /></span>

      </button>
    </div>
  )
}

export default CatagoriesCard;
