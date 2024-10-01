import { CurrencySelector, LanguageButton } from "../../data/imports"
import styles from "./css/TopBar.module.css";

import TopBarSlider from "../helpers/TopBarSlider";
import { TopBarSocialMediaIcons } from "../../data/constants";


const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logoContainer}>
        {
          TopBarSocialMediaIcons.map((currentIcon,index)=>{
            return (<a key={index} className={styles.logos}>
              {currentIcon}
            </a>);
          })
        }
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
