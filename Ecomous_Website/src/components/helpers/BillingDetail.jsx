import React from "react";


function InputTagBox({ tittle, Placeholder, nameId, Type }) {
    return (
      <div className="grid mt-[30px] text-sm font-semibold gap-1">
        <label htmlFor={nameId}>
          {tittle}
          <span className="text-[crimson]">*</span>
        </label>
        <input
          type={Type}
          name={nameId}
          id={nameId}
          className="flex-1 placeholder:font-normal border py-3 px-4 placeholder:text-[14px] rounded"
          placeholder={Placeholder}
        />
      </div>
    );
  }




const BillingDetail = () => {
  return (
    <form>
      <h5 className="text-lg md:text-2xl font-medium">Billing Details</h5>
      <div className="*:mb-[15px] md:grid grid-cols-2 gap-[2vw] w-full text-sm font-semibold">
        <InputTagBox
          Placeholder="First Name"
          tittle="First Name"
          nameId="first_name"
          Type="text"
        />
        <InputTagBox
          Placeholder="Last Name"
          tittle="Last Name"
          nameId="last_name"
          Type="text"
        />
      </div>
      <div className="grid mt-[15px] w-full text-sm font-semibold">
        <label htmlFor="country_region" className="mb-[10px]">
          Country/Region<span className="text-[crimson]">*</span>
        </label>
        <div className="border rounded p-3 ">
          <select
            name="country"
            id="country"
            className="focus:outline-none  CountrySelector  w-full cursor-pointer"
          >
            {[
              "Australia",
              "Belgium",
              "Canada",
              "France",
              "Germany",
              "Hong Kong",
              "Israel",
              "Italy",
              "Japan",
              "New Zealand",
              "Norway",
              "Singapore",
              "South Korea",
              "Spain",
              "Switzerland",
              "United Arab Emirates",
              "United Kingdom",
              "United States",
              "Vietnam",
              "Malaysia",
              "Poland",
              "India",
            ]
              .sort()
              .map((country) => (
                <option
                  value={country}
                  selected={country === "India" ? true : false}
                >
                  {country}
                </option>
              ))}
          </select>
        </div>
      </div>
      <InputTagBox
        Placeholder="Ex. Surat"
        tittle="Town/City"
        nameId={"Town_city"}
        Type="text"
      />
      <InputTagBox
        Placeholder="Ex. Obroy Mension, Varacha"
        tittle="Address"
        nameId={"Address"}
        Type="text"
      />
      <InputTagBox
        Placeholder="Ex. +91 76938 40322"
        tittle="Phone Number"
        nameId={"telephone_number"}
        Type="number"
      />
      <InputTagBox
        Placeholder="example@gmail.com"
        tittle="Email"
        nameId={"email_id"}
        Type="email"
      />
      <div className="grid mt-[30px] text-sm font-semibold gap-1">
        <label htmlFor="order_notes">
          Order Notes
          <span className="text-[crimson]">*</span>
        </label>
        <textarea
          name="order_notes"
          id="order_notes"
          placeholder="add notes"
          rows={4}
          className="placeholder:font-normal border py-3 px-4 placeholder:text-[14px] rounded resize-none"
        ></textarea>
      </div>
    </form>
  );
};

export default BillingDetail;
