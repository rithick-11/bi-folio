import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container, Logo } from "../../Components";
import useAuthStore from "../../store/useAuthStore";

const index = () => {
  const { onForgotPassword, handleSignUpForm, signUpForm } = useAuthStore();

  return (
    <div>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Container className="min-h-screen flex flex-col items-center justify-center">
        <Logo />
        <h1 className="text-sm text-left mt-4">Forgot password</h1>
        <div className="bg-white/80 shadow w-full sm:w-2/3 md:w-1/2 px-4 py-8 rounded-md flex flex-col gap-3 mt-6 border border-purple-400">
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
          <button onClick={onForgotPassword} className="bg-purple-500/90 mt-4 text-lg font-semibold text-white rounded py-1 cursor-pointer">Sent Link</button>
        </div>
      </Container>
    </div>
  );
};

export default index;
