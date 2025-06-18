import React from "react";
import useAuthStore from "../../store/useAuthStore";
import { Navigate } from "react-router-dom";
import { Container, Logo } from "../../Components";

const index = () => {
  const { usernameUnique, signUpForm, handleSignUpForm, onSignup } =
    useAuthStore();

  if (!usernameUnique) return <Navigate to="/" />;

  return (
    <div>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Container className="min-h-screen flex flex-col items-center justify-center">
        <Logo />
        <h1 className="text-sm text-center mt-4">
          Create a BiFolio account to use <br />{" "}
          <span className="text-purple-500 font-semibold">
            bi-folio/{signUpForm.username}
          </span>
        </h1>
        <form
          onSubmit={onSignup}
          className="bg-white/80 shadow w-full sm:w-2/3 md:w-1/2 px-4 py-8 rounded-md flex flex-col gap-3 mt-6 border border-purple-400"
        >
          <label className="input-tag w-full">
            Name*
            <input
              type="name"
              name="name"
              value={signUpForm.name}
              onChange={handleSignUpForm}
              required
            />
          </label>
          <label className="input-tag w-full">
            Email*
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
            Create Account
          </button>
        </form>
      </Container>
    </div>
  );
};

export default index;
