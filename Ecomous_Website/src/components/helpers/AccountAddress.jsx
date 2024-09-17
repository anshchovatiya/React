export default function AccountAddress() {
    return (
      <div className="flex justify-center items-center flex-col text-center  max-lg:mt-7">
        <button className="bg-black text-sm text-white py-3 px-16 rounded">
          Add a New Address
        </button>
        <p className=" font-normal my-6 text-2xl">Default</p>
        <div className="grid gap-1 text-base font-medium">
          <p>Ecomous, 188 Fashion Street, Suite 567, New York</p>
          <p>info@fashionshop.com</p>
          <p>(212)5555-1234</p>
        </div>
        <div className="flex gap-4 mt-5 font-semibold *:px-8 *:rounded *:py-3 text-sm">
          <button className="bg-black text-sm text-white">Edit</button>
          <button className="  border border-black ">Delete</button>
        </div>
      </div>
    );
  }