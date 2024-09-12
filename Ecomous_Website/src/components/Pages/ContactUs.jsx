import { Contact } from "lucide-react";
import PageHeader from "../helpers/PageHeader";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function ContactDetailsForm() {
  return (
    <div className="mt-[28px] mb-[35] md:mt-[60px] md:mb-[100px] max-w-[1240px] lg:mx-auto px-[20px] grid lg:grid-cols-2 gap-10">
      <div>
        <p className="text-[18px] md:text-[28px] font-normal mb-5">
          Visit Our Store
        </p>
        <div className="text-[14px] mb-[20px]">
          <p className=" font-bold mb-[8px]">Address</p>
          <p className="font-normal">
            66 Mott St, New York, New York, Zip Code: 10006, AS
          </p>
        </div>
        <div className="text-[14px] mb-[20px]">
          <p className=" font-bold mb-[8px]">Phone</p>
          <p className="font-normal">(623) 934-2400</p>
        </div>
        <div className="text-[14px] mb-[20px]">
          <p className=" font-bold mb-[8px]">Email</p>
          <p className="font-normal">EComposer@example.com</p>
        </div>
        <div className="text-[14px] mb-[20px]">
          <p className=" font-bold mb-[8px]">Open Time</p>
          <p className="font-normal">
            Our store has re-opened for shopping, <br />
            exchange Every day 11am to 7pm
          </p>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <a>
            <FaFacebookF className="text-[14px] hover:text-[crimson]" />
          </a>
          <a>
            <BsTwitterX className="text-[14px] hover:text-[crimson]" />
          </a>
          <a>
            <FaInstagram className="text-[14px] hover:text-[crimson]" />
          </a>
          <a>
            <FaTiktok className="text-[14px] hover:text-[crimson]" />
          </a>
          <a>
            <FaPinterest className="text-[14px] hover:text-[crimson]" />
          </a>
        </div>
      </div>
      <div>
      <p className="text-[18px] md:text-[28px] font-normal mb-5">
         Get in Touch
        </p>
        <p className="text-[14px] mb-6">If you’ve got great products your making or looking to work with us then drop us a line.</p>
        <form>
          <div className="grid grid-cols-2 *:py-3 *:px-4 *:border *:border-[#ebebeb] *:rounded-[4px] gap-4">
            <input type="text" placeholder="Name *"/>
            <input type="email" placeholder="Email *" />
          </div>
          <textarea className="w-full mt-[15px] border-[#ebebeb] border h-[110px] rounded-[4px] py-3 px-[18px]" placeholder="Message"></textarea>
          <input type="submit" className="w-full py-3 bg-black text-white rounded-sm mt-[15px]" />
        </form>

      </div>
    </div>
  );
}

const ContactUs = () => {
  return (
    <div className="ContactUsPage">
      <PageHeader
        tittle={"Contact Us"}
      />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.4584600393!2d72.66640575219382!3d21.15928887122211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1726073558009!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] md:h-[646px] xl:pr-2 pr-2"
        ></iframe>
      </div>
      <ContactDetailsForm />
    </div>
  );
};

export default ContactUs;
