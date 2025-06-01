"use client";

import { signup } from "@/actions/user";
import { SIGNUP_URL } from "@/app/constants/signup.constant";
import Loading from "@/app/user/loading";
import { ErrorResp, SignUpResp } from "@/app/user/signup/user.interface";

import { useState } from "react";

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function userSignup() {
    setLoading(true);
    const body = { username, password };
    try {
      // const res: SignUpResp = await axios.post(SIGNUP_URL, body);

      // if (res.data.body) {
      //   alert("Sign up successful");
      // }

      const res = await signup(username, password);

      console.log("Response ", res);
    } catch (err: any) {
      // const errorMessage = err.response.data.message;

      alert(err);
    } finally {
      setLoading(false);
    }
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="sign-up-container flex flex-col gap-4 justify-center w-full h-screen items-center rounded">
        <label htmlFor="username">
          Username:{" "}
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-400 p-1"
            type="text"
            placeholder="Enter your username"
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 p-1"
            type="password"
            placeholder="Enter your username"
          />
        </label>
        <button
          className="border border-gray-500 w-40 rounded-2xl mt-4 cursor-pointer"
          onClick={userSignup}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Signup;
