import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import Loader from "./Loader";
import { toast } from "react-toastify";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState({
    name: "",
    email: "",
    password: "",
  });


  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function sendRequest() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", JSON.stringify(jwt));
      toast( "Login succesFullll")
      navigate("/blog");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen">
    {/* Left side */}
  

    {/* Right side */}
    <div className="w-full flex items-center justify-center m-[0 auto] p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" w-full max-w-md"
      >
        {loading ? (
          <Loader />
        ) : (
          <div className="p-8">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4"
              />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {type === "signup" ? "Create Account" : "Welcome Back"}
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-gray-600 italic mb-4"
              >
                "Welcome to Our Platform"
              </motion.p>
              <p className="text-gray-600 mt-2">
                {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={type === "signin" ? "/signup" : "/signin"}
                  className="text-purple-600 font-medium ml-1 hover:underline"
                >
                  {type === "signup" ? "Sign In" : "Sign Up"}
                </motion.a>
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {type === "signup" && (
                <LabeledInput
                  label="Name"
                  placeholder="Enter your name"
                  onChange={(e) => setPostInputs({ ...postInputs, name: e.target.value })}
                />
              )}
              <LabeledInput
                label="Email"
                placeholder="Enter your email"
                onChange={(e) => setPostInputs({ ...postInputs, email: e.target.value })}
              />
              <LabeledInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={sendRequest}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition duration-300"
              >
                {type === "signup" ? "Sign Up" : "Sign In"}
              </motion.button>
            </motion.div>
          </div>
        )}
      </motion.div>
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
