import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAccount } from "../../store/login";
import { useToast } from "../../hooks/use-toast";

function generatePasswordDots(string) {
  let length = string?.length;
  const Dots = [];

  for (let i = 0; i < length; i++) {
    Dots.push(<div key={i+i} className=" h-1 w-1 bg-black rounded"></div>);
  }

  return <div className="flex items-center gap-[2px]">{Dots}</div>;
}

export default function AccountDetails() {
  let userInfo = useSelector((state) => state.account);
  let dispatch = useDispatch();
  const { toast } = useToast();
  let [wrongPassword, setWrongPassword] = useState(false);
  let [notMatch, setNotMatch] = useState(false);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let formData = Object.fromEntries(form);
    if (formData["current_password"] !== userInfo?.password) {
      setWrongPassword(true);
      return;
    }
    setWrongPassword(false);
    if (formData["new_password"].length < 4) {
      alert("password is not strong");
      return;
    }
    console.log(formData["new_password"]);  
    if (formData["new_password"] !== formData["confirm_password"]) {
      setNotMatch(true);
      return;
    }
    setNotMatch(false);
    const payload = {
      ...userInfo,
      password:formData['new_password']
    }
    dispatch(addAccount(payload));
    event.target.reset();
    toast({
      description: "password changed",
    });
  }, []);

  return (
    <div>
      <div className=" text-base font-semibold leading-[30px]">
        <div className="flex gap-2">
          <span>Name &#58; </span>
          <p>
            {userInfo?.first_name} {userInfo?.last_name}
          </p>
        </div>
        <div className="flex gap-2">
          <span>Email &#58; </span>
          <p>{userInfo?.email_id}</p>
        </div>
        <div className="flex gap-2">
          <span>password &#58; </span>
          {generatePasswordDots(userInfo?.password)}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid gap-5 h-fit  max-lg:mt-7 
      "
      >
        <h6 className="text-2xl my-2">Password Change</h6>
        <div className="h-16">
          <input
            type="password"
            name="current_password"
            className="detailsInput"
            placeholder="Current Password"
          />
          {wrongPassword && (
            <div className="text-sm text-red-600 py-2 font-semibold">
              wrong password
            </div>
          )}
        </div>

        <input
          type="password"
          name="new_password"
          className="detailsInput"
          placeholder="New Password"
        />
        <div>
          <input
            type="password"
            name="confirm_password"
            className="detailsInput"
            placeholder="Confirm Password"
          />
          {notMatch && (
            <div className="text-sm text-red-600 py-2 font-semibold">
              password do not match
            </div>
          )}
        </div>
        <input
          type="submit"
          name="submit"
          className="w-full bg-black text-white text-base font-semibold mt-4 py-3 rounded cursor-pointer"
        />
      </form>
    </div>
  );
}
