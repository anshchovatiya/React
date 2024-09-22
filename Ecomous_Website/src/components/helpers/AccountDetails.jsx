import { useSelector } from "react-redux";
import { GoDot, GoDotFill } from "react-icons/go";

function generatePasswordDots(string) {
  let length = string.length;
  const Dots = [];

  for (let i = 0; i < length; i++) {
    Dots.push(<div className=" h-1 w-1 bg-black rounded"></div>);
  }

  return <div className="flex items-center gap-[2px]">{Dots}</div>;
}

export default function AccountDetails() {
  let userInfo = useSelector((state) => state.account);

  return (
    <div>
      <div className=" text-base font-semibold leading-[30px]">
        <div className="flex gap-2">
          <span>Name &#58; </span>
          <p>
            {userInfo.first_name} {userInfo.last_name}
          </p>
        </div>
        <div className="flex gap-2">
          <span>Email &#58; </span>
          <p>{userInfo.email_id}</p>
        </div>
        <div className="flex gap-2">
          <span>password &#58; </span>
          {generatePasswordDots(userInfo.password)}
        </div>
      </div>
      <form
        className="grid gap-5 h-fit  max-lg:mt-7
      "
      >
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
    </div>
  );
}
