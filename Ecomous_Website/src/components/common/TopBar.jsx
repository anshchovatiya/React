import { CurrencySelector, LanguageButton } from "../helpers/LanguageButton";
import styles from "./css/TopBar.module.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import TopBarSlider from "../helpers/TopBarSlider";


const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logoContainer}>
        <a>
          <FaFacebookF className={styles.logos} />
        </a>
        <a>
          <BsTwitterX className={styles.logos} />
        </a>
        <a>
          <FaInstagram className={styles.logos} />
        </a>
        <a>
          <FaTiktok className={styles.logos} />
        </a>
        <a>
          <FaPinterest className={styles.logos} />
        </a>
      </div>
      <div className={`${styles.offersSlider} min-1150:ml-24`}>
        <TopBarSlider />
      </div>
      <div className={`${styles.topBarLanguage} flex `}>
        <CurrencySelector />
        <LanguageButton />
      </div>
    </div>
  );
};

export default TopBar;
