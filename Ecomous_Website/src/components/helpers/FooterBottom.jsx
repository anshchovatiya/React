

const FooterBottom = () => {
  return (
    <div className="flex max-md:flex-col max-md:text-center justify-between w-full py-5  px-[18px] gap-[20px] max-md:pb-24 overflow-x-hidden">
      <p>© 2024 Ecomus Store. All Rights Reserved</p>
      <div className="flex max-md:justify-center gap-[0.8vw]">
        <PaymentMethodIcons />
      </div>
    </div>
  );
};

export default FooterBottom;

export function PaymentMethodIcons() {
  return (
    <>
      <img src="" alt="Payment Method logo" />
      <img src="" alt="Payment Method logo" />
      <img src="" alt="Payment Method logo" />
      <img src="" alt="Payment Method logo" />
      <img src="" alt="Payment Method logo" />
    </>
  );
}
