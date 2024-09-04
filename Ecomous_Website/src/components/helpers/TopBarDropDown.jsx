
import styles  from "./css/TopBarDropDown.module.css"
const TopBarDropDown= ({children}) => {
    return (

        <div className={styles.dropdown}>
            {children}
        </div>
    )
}

export default TopBarDropDown;