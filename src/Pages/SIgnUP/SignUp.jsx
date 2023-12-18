import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          const saveUser = { name: name, email: email, role: 'user' };
          fetch("https://tour-utopia.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          });
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-screen-xl mx-auto px-3 md:px-0 pt-44">
        <div>
          <h3 className="uppercase text-center text-black text-2xl font-bold">
            Create an account
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleRegister} className="md:w-2/5">
            <div className="mb-4 w-full">
              <label className="block text-sm text-black font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-2 border rounded-md outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-black font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border rounded-md outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-black font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  className="mt-1 block w-full p-2 border rounded-md outline-none"
                />
                <span
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm text-black font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  className="mt-1 block w-full p-2 border rounded-md outline-none"
                />
                <span
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div className="text-red-800 text-center text-sm pb-2">{error}</div>
            <div>
              <button
                type="submit"
                className="bg-black text-white w-full py-2 rounded-md font-bold hover:bg-slate-900"
              >
                Register
              </button>
            </div>

            <div className="text-center py-3 text-black">
              <p>
                Already have an account ?{" "}
                <span className="text-black">
                  <Link to="/login">Login Now</Link>
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
