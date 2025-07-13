import React from "react";
import useAuthStore from "../../store/useAuthStore";
import Cookies from "js-cookie";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container, Logo } from "../../Components";

const index = () => {
  const { onLogin, handleSignUpForm, signUpForm } = useAuthStore();
  const navigate = useNavigate();

  const onFormSumbit = async (e) => {
    e.preventDefault();
    if (await onLogin()) {
      navigate("/account");
    }
  };

  if (Cookies.get("bifolioJwt")) {
    return <Navigate to="/account" />;
  }

  return (
    <div>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Container className="min-h-screen flex flex-col items-center justify-center">
        <Logo />
        <h1 className="text-sm text-center mt-4">Login with BiFolio Account</h1>
        <form
          onSubmit={onFormSumbit}
          className="bg-white/80 shadow w-full sm:w-2/3 md:w-1/2 px-4 py-8 rounded-md flex flex-col gap-3 mt-6 border border-purple-400"
        >
          <label className="input-tag w-full">
            Username / Email*
            <input
              type="name"
              name="email"
              value={signUpForm.email}
              onChange={handleSignUpForm}
              required
            />
          </label>
          <label className="input-tag w-full">
            Password*
            <input
              type="password"
              name="password"
              value={signUpForm.password}
              onChange={handleSignUpForm}
              required
            />
          </label>

          <button
            type="submit"
            className="bg-purple-500/90 mt-4 text-lg font-semibold text-white rounded py-1 cursor-pointer"
          >
            Login
          </button>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs font-extralight mt-3">
              I don't have an account{" "}
              <Link to="/" className="text-purple-500 underline ">
                click here
              </Link>
            </p>
            <Link to="/forgot-password" className="text-xs font-extralight mt-3 underline cursor-pointer">Forgot password</Link>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default index;
