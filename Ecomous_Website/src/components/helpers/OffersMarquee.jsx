import React, { Fragment } from "react";
import styles from "./css/OffersMarquee.module.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { HeroMarqueeData } from "../../data/constants";

const OfferMarquee = () => {
  return (
    <div className={`${styles.textWrapper} overflow-x-hidden`}>
      {[1, 2, 3,4].map((index) => {
        return (
          <div>
            {HeroMarqueeData.map((data, index) => {
              return (
                <Fragment key={data+index}>
                  <span>
                    <AiFillThunderbolt />
                  </span>
                  <p>{data}</p>
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default OfferMarquee;
