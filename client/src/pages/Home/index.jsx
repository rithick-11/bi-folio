import React from "react";
import { Container, Logo } from "../../Components";
import { HashLoader } from "react-spinners";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const index = () => {
  const { signUpForm, isLoading, checkUsername, handleSignUpForm } =
    useAuthStore();

  const navigate = useNavigate();

  const onCheck = async () => {
    if (await checkUsername()) {
      navigate("/signup");
    }
  };

  return (
    <div>
      <div class="absolute top-0 -z-10 h-full w-full bg-white">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Container className="flex flex-col items-center justify-center min-h-screen">
        <Logo />
        <p className="mt-3 text-sm font-semibold">
          Create your portfolio, within a minutes
        </p>

        <div className="mt-10 flex flex-col gap-2">
          <div className="px-3 py-2 text-sm bg-white rounded-md border">
            <label className="font-semibold">bi-folio.vercel/</label>
            <input
              type="text"
              value={signUpForm.username}
              name="username"
              onChange={handleSignUpForm}
              className="focus:outline-none font-normal"
            />
          </div>
          <button
            onClick={onCheck}
            className="flex items-center gap-2 px-2 py-1 bg-purple-500 text-sm font-bold text-white rounded self-end cursor-pointer"
          >
            {isLoading && <HashLoader size={13} color={"white"} />}
            Check
          </button>
        </div>
      </Container>
    </div>
  );
};

export default index;
