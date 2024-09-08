import { child } from "@splidejs/splide/src/js/utils";
import React, { useState } from "react";
import { GiWashingMachine } from "react-icons/gi";
import { TbIroningFilled } from "react-icons/tb";
import { TbBleachOff } from "react-icons/tb";
import { TbWashDrycleanOff } from "react-icons/tb";
import { FaStumbleuponCircle } from "react-icons/fa";
import img1 from "../../assets/svg/description-image-1.svg"
import img2 from "../../assets/svg/description-image-2.svg"
import img3 from "../../assets/svg/description-image-3.svg"
import img4 from "../../assets/svg/description-image-4.svg"
import img5 from "../../assets/svg/description-image-5.svg"
import img6 from "../../assets/svg/description-image-6.svg"
import img7 from "../../assets/svg/description-image-7.svg"



const InfoBox = () => {

    let [currentDescription,setCurrentDescription] = useState("Description");

  return (
    <div className="my-[50px] mx-[15px]  md:px-[30px] overflow-w-hidden">
      <div className="border p-[15px] md:p-[30px]">
        <div className="flex gap-[2.8vw] px-3 border-b *:pb-3 *:font-semibold *:text-xs md:*:text-lg cursor-pointer">
          <p onClick={()=>{setCurrentDescription("Description")}} className={`${currentDescription === "Description" && "text-[crimson] border-b border-[crimson]"}`}>Description</p>
          <p onClick={()=>{setCurrentDescription("Review")}} className={`${currentDescription === "Review" && "text-[crimson]  border-b border-[crimson]"}`}>Review</p>
          <p onClick={()=>{setCurrentDescription("Shipping")}} className={`${currentDescription === "Shipping" && "text-[crimson] border-b border-[crimson]"}`}>Shipping</p>
          <p onClick={()=>{setCurrentDescription("Return Policies")}} className={`${currentDescription === "Return Policies" && "text-[crimson] border-b border-[crimson]"}`}>Return Policies</p>
        </div>
        <Description isVisible={currentDescription === "Description"}>
          <p className="mb-[20px]">
            Button-up shirt sleeves and a relaxed silhouette. It’s tailored with
            drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™
            Viscose — responsibly sourced wood-based fibres produced through a
            process that reduces impact on forests, biodiversity and water
            supply.
          </p>
          <div className="Description md:flex gap-[80px]">
            <div>
              <div>
                <h4 className="ListTittle">Features</h4>
                <ul className="list-disc list-inside">
                  <li className="ListItem">Front button placket</li>
                  <li className="ListItem">Adjustable sleeve tabs</li>
                  <li className="ListItem">
                    Babaton embroidered crest at placket and hem
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="ListTittle">Materials Care</h4>
                <ul className="list-disc list-inside">
                  <li className="ListItem">
                    Content: 100% LENZING™ ECOVERO™ Viscose
                  </li>
                  <li className="ListItem">Care: Hand wash</li>
                  <li className="ListItem">Imported</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="ListTittle">Materials Care</h4>
              <ul>
                <li className="ListItem">
                  <div className="flex items-center gap-3">
                    <span className="border p-2 rounded-full">
                      <GiWashingMachine />
                    </span>
                    <p>Machine wash max. 30ºC. Short spin.</p>
                  </div>
                </li>
                <li className="ListItem">
                  <div className="flex items-center gap-3">
                    <span className="border p-2 rounded-full"><TbIroningFilled /></span>
                    <p>Iron maximum 110ºC.</p>
                  </div>
                </li>
                <li className="ListItem">
                  <div className="flex items-center gap-3">
                  <span className="border p-2 rounded-full"><TbBleachOff /></span>
                    <p>Do not bleach/bleach.</p>
                  </div>
                </li>
                <li className="ListItem">
                  <div className="flex items-center gap-3">
                  <span className="border p-2 rounded-full"><TbWashDrycleanOff /></span>
                    <p>Do not dry clean.</p>
                  </div>
                </li>
                <li className="ListItem">
                  <div className="flex items-center gap-3">
                  <span className="border p-2 rounded-full"><FaStumbleuponCircle /></span>
                    <p>Tumble dry, medium hear.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Description>
        <Description isVisible={currentDescription === "Review"}>
            <div className="border rounded-lg grid grid-cols-[30%_70%] *:p-3 *:text-[rgb(144,144,144)]">
                <p className="border-b font-bold border-r">Color</p>
                <p className="border-b font-normal text-[14px]">White, Pink, Black</p>
                <p className="font-bold border-r">Size</p>
                <p className="font-normal text-[14px]">S, M, L, XL</p>
            </div>
        </Description>
        <Description isVisible={currentDescription === "Shipping"}>
          <div className="ml-[-10px]">
            <h1 className="text-[22px] font-normal mb-[26px]">The Company Private Limited Policy</h1>
            <p className="mb-[24px] text-[rgb(144,144,144)]">The Company Private Limited and each of their respective subsidiary, parent and affiliated companies is deemed to operate this Website (“we” or “us”) recognizes that you care how information about you is used and shared. We have created this Privacy Policy to inform you what information we collect on the Website, how we use your information and the choices you have about the way your information is collected and used. Please read this Privacy Policy carefully. Your use of the Website indicates that you have read and accepted our privacy practices, as outlined in this Privacy Policy.</p>
            <p className="mb-[24px] text-[rgb(144,144,144)]">Please be advised that the practices described in this Privacy Policy apply to information gathered by us or our subsidiaries, affiliates or agents: (i) through this Website, (ii) where applicable, through our Customer Service Department in connection with this Website, (iii) through information provided to us in our free standing retail stores, and (iv) through information provided to us in conjunction with marketing promotions and sweepstakes.</p>
            <p className="mb-[24px] text-[rgb(144,144,144)]">We are not responsible for the content or privacy practices on any websites.</p>
            <p className="mb-[24px] text-[rgb(144,144,144)]">We reserve the right, in our sole discretion, to modify, update, add to, discontinue, remove or otherwise change any portion of this Privacy Policy, in whole or in part, at any time. When we amend this Privacy Policy, we will revise the “last updated” date located at the top of this Privacy Policy.</p>
            <p className="mb-[24px] text-[rgb(144,144,144)]">If you provide information to us or access or use the Website in any way after this Privacy Policy has been changed, you will be deemed to have unconditionally consented and agreed to such changes. The most current version of this Privacy Policy will be available on the Website and will supersede all previous versions of this Privacy Policy.</p>
            <p className="mb-[24px] text-[rgb(144,144,144)]">If you have any questions regarding this Privacy Policy, you should contact our Customer Service Department by email at marketing@company.com</p>
          </div>
        </Description>
        <Description isVisible={currentDescription === "Return Policies"}>
            <div className="text-center">
                <div className="flex justify-center mt-4">
                    <img src={img1} alt="img1"/>
                    <img src={img2} alt="img2"/>
                    <img src={img3} alt="img3"/>
                    <img src={img4} alt="img4"/>
                    <img src={img5} alt="img5"/>
                    <img src={img6} alt="img6"/>
                    <img src={img7} alt="img7"/>
                </div>
                <p className="mt-4 text-[rgb(144,144,144)]">LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900 Grms/mt</p>
            </div>
        </Description>
      </div>
    </div>
  );
};

export default InfoBox;

function Description({ children,isVisible }) {
  return (
    <div id="DescriptionContainer" className={`text-[14px] font-medium p-[20px] pb-0 ${isVisible || "hidden"}`}>
      {children}
    </div>
  );
}
