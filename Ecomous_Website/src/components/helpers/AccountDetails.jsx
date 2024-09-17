export default function AccountDetails() {
  return (
    <form
      className="grid gap-5 h-fit  max-lg:mt-7
      "
    >
      <input
        type="text"
        name="first_name"
        className="detailsInput"
        placeholder="First Name"
      />
      <input
        type="text"
        name="last_name"
        className="detailsInput"
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email_id"
        className="detailsInput"
        placeholder="ecomous@gmail.com"
      />
      <h6 className="text-2xl my-4">Password Change</h6>
      <input
        type="password"
        name="current_password"
        className="detailsInput"
        placeholder="Current Password"
      />
      <input
        type="password"
        name="new_password"
        className="detailsInput"
        placeholder="New Password"
      />
      <input
        type="password"
        name="confirm_password"
        className="detailsInput"
        placeholder="Confirm Password"
      />
      <input
        type="submit"
        name="submit"
        className="w-full bg-black text-white text-base font-semibold mt-4 py-3 rounded"
      />
    </form>
  );
}
