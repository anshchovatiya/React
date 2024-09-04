import { FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import styles from "./css/TestimonialCard.module.css";

const TestimonialCard = ({ review }) => {
  function renderStar() {
    let stars = [];
    for (let cur = 0; cur < review?.rating; cur++) {
      stars.push(<FaStar key={cur} />);
    }
    return stars;
  }

  return (
    <div className={styles.reviewCard}>
      <div className={styles.ratingContainer}>{renderStar()}</div>
      <p>{review.tittle}</p>
      <p>&ldquo; {review.description} &rdquo;</p>
      <div className={styles.userInfo}>
        <p>{review.author}</p>
        <p>{review.location}</p>
      </div>
      <div className={styles.productInfoContainer}>
        <div>
          <img src={review.productImage} alt="product image" />
          <div>
            <p>{review.productName}</p>
            <p>&#36;{review.price}</p>
          </div>
        </div>
        <span><GoArrowUpRight /></span>
      </div>
    </div>
  );
};

export default TestimonialCard;
