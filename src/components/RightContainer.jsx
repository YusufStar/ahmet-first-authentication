import React from "react";
import CustomInput from "./CustomInput";

function RightContainer() {
  return (
    <div className="flex-1 h-screen flex items-center justify-center">
      <div className="w-[300px] h-[350px] flex flex-col">
        <div className="flex flex-col w-full mb-6">
          <span className="font-bold text-[36px]">WELCOME BACK</span>
          <span className="font-semibold text-xs text-black/70">
            Enter your email and password to access your account
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <CustomInput label={"email"} placeholder={"Enter your email."} />
          <CustomInput
            label={"password"}
            placeholder={"Enter your password."}
          />
        </div>

        <div className="flex w-full mt-4 h-auto flex-row items-center">
          <div className="flex gap-2 h-min">
            <input type="checkbox" id="remember_me" />
            <label
              className="text-black/50 font-medium text-xs"
              htmlFor="remember_me"
            >
              Remember me
            </label>
          </div>

          <span className="text-black/50 font-medium ml-auto h-min text-xs">
            Forgot Password
          </span>
        </div>

        <div className="flex flex-col mt-6 gap-4">
          <button className="rounded-xl bg-black flex items-center justify-center py-3">
            <span className="text-sm font-medium text-white">
              Sign In
            </span>
          </button>

          <button className="border border-[#EDEDED] hover:bg-[#EDEDED] transition-all ease-in-out duration-300 rounded-xl flex items-center justify-center py-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3446 5.08413H10.9597V5.06429H6.65863V6.97587H9.35946C8.96543 8.08865 7.90666 8.88745 6.65863 8.88745C5.07513 8.88745 3.79126 7.60359 3.79126 6.02008C3.79126 4.43658 5.07513 3.15271 6.65863 3.15271C7.38957 3.15271 8.05457 3.42846 8.56089 3.87888L9.91262 2.52715C9.0591 1.73169 7.91741 1.24113 6.65863 1.24113C4.01946 1.24113 1.87968 3.38091 1.87968 6.02008C1.87968 8.65926 4.01946 10.799 6.65863 10.799C9.29781 10.799 11.4376 8.65926 11.4376 6.02008C11.4376 5.69966 11.4046 5.38687 11.3446 5.08413Z"
                fill="#FFC107"
              />
              <path
                d="M2.43071 3.79572L4.00083 4.94721C4.42568 3.89536 5.45459 3.15271 6.65865 3.15271C7.38959 3.15271 8.05458 3.42846 8.56091 3.87888L9.91263 2.52715C9.05911 1.73169 7.91742 1.24113 6.65865 1.24113C4.82305 1.24113 3.23118 2.27745 2.43071 3.79572Z"
                fill="#FF3D00"
              />
              <path
                d="M6.65866 10.799C7.89307 10.799 9.01469 10.3266 9.86271 9.55843L8.38363 8.30683C7.8877 8.68398 7.28171 8.88796 6.65866 8.88747C5.41566 8.88747 4.36023 8.09488 3.96262 6.98879L2.40421 8.1895C3.19512 9.73717 4.80133 10.799 6.65866 10.799Z"
                fill="#4CAF50"
              />
              <path
                d="M11.3446 5.08413H10.9597V5.0643H6.65863V6.97588H9.35945C9.17097 7.50549 8.83146 7.96827 8.38288 8.30706L8.38359 8.30658L9.86268 9.55819C9.75802 9.65329 11.4376 8.40956 11.4376 6.02009C11.4376 5.69966 11.4046 5.38688 11.3446 5.08413Z"
                fill="#1976D2"
              />
            </svg>

            <span className="text-sm font-medium">Sign In with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
