import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"} `, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", JSON.stringify(jwt));
      console.log("Token stored in localStorage:", localStorage.getItem("token"));
      
       navigate("/blog");
    } catch (e) {
      console.log(e);
      
    }
    
  }

  return (
    <div className="h-screen items-center flex flex-col justify-center">
      
        <div>
          <div className="px-10">
            <div className="text-3xl font-semibold">Create An Account</div>
            <div className="text-slate-500">
             {type === "signin" ? "Don't have an account?" :  "Already have an account?" }
              <Link className="underline" to={type=== "signin" ? "/signup" : '/signin'}>
                {type == "signup" ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
        {type === 'signup' ?   <LabeledInput
              label="Name"
              placeholder="Enter name"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
            : null }
            <LabeledInput
              label="Email"
              placeholder="Enter Email"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabeledInput
              label="Password"
              type={"password"}
              placeholder="Enter Password"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <button
            onClick={sendRequest}
              type="button"
              className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
          {/* Add other input fields for signup as needed */}
        </div>
     
    </div>
  );
};

interface inputTypes {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabeledInput({ label, placeholder, onChange, type }: inputTypes) {
  return (
    <div>
      <label className="block mb-2 pt-4 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
