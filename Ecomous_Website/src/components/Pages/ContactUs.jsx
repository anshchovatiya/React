import PageHeader from "../helpers/PageHeader";
import ContactDetailsForm from "../main/ContactDetailsForm";

const ContactUs = () => {
  return (
    <div className="ContactUsPage">
      <PageHeader tittle={"Contact Us"} />
      <div className="!w-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.4584600393!2d72.66640575219382!3d21.15928887122211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1726073558009!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] md:h-[646px] xl:pr-2"
        ></iframe>
      </div>
      <ContactDetailsForm />
    </div>
  );
};

export default ContactUs;
