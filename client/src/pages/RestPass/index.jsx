import React from "react";
import { Container, Logo } from "../../Components";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import useAuthStore from "../../store/useAuthStore";
import { apiStatus } from "../../utils/data";

const index = () => {
  const [searchParams] = useSearchParams();
  const verifyToken = searchParams.get("verify");

  const {
    verifyUserToken,
    signUpForm,
    handleSignUpForm,
    apiState,
    changePassword,
  } = useAuthStore();

  if (!verifyToken) {
    return (
      <div>
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>
        <Container className="min-h-screen flex flex-col items-center justify-center">
          <Logo />
          <h1 className="text-lg text-left mt-4">
            Invalid or missing verification token
          </h1>
        </Container>
      </div>
    );
  }

  useEffect(() => {
    verifyUserToken(verifyToken);
  }, []);

  const renderContent = () => {
    switch (apiState) {
      case apiStatus.init:
        return <p>inin</p>;

      case apiStatus.loading:
        return <h1 className="text-lg text-left mt-4">Verifying token...</h1>;

      case apiStatus.success:
        return (
          <div className="bg-white/80 shadow w-full sm:w-2/3 md:w-1/2 px-4 py-8 rounded-md flex flex-col gap-3 mt-6 border border-purple-400">
            <label className="input-tag w-full">
              Enter new password*
              <input
                type="password"
                name="password"
                placeholder="New Password"
                value={signUpForm.password}
                onChange={handleSignUpForm}
                required
              />
            </label>
            <button
              onClick={changePassword}
              className="bg-purple-500/90 mt-4 text-lg font-semibold text-white rounded py-1 cursor-pointer"
            >
              Sent Link
            </button>
          </div>
        );

      case apiStatus.error:
        return (
          <>
            <h1 className="text-lg text-left mt-4">
              Error verifying token. Please try again later.
            </h1>
            <Link to="/forgot-password" className="text-purple-500 text-sm underline">click here to reset password</Link>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Container className="min-h-screen flex flex-col items-center justify-center">
        <Logo />
        {renderContent()}
      </Container>
    </div>
  );
};

export default index;
