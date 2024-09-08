import LookImageSection from "../helpers/LookImageSection";
import SectionHead from "../helpers/SectionHead";
import styles from "./css/TheLook.module.css";

const TheLook = () => {
  return (
    <div className="overflow-x-hidden">
      <SectionHead
        tittle="Shop the look"
        description="Inspire and let yourself be inspired, from one unique fashion to another."
      />
      <LookImageSection/>
    </div>
  );
};

export default TheLook;



