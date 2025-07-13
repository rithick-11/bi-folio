import { create } from "zustand";
import api from "../utils/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { isValidUsername } from "../utils/helper";
import { apiStatus } from "../utils/data";

const useAuthStore = create((set, get) => ({
  signUpForm: {
    username: "",
    name: "",
    email: "",
    password: "",
  },
  apiState: apiStatus.init,
  isLoading: false,
  usernameUnique: false,
  handleSignUpForm: (e) => {
    const { name, value } = e.target;
    if (name === "username" && !isValidUsername(value)) {
      return;
    }
    set((state) => ({
      signUpForm: {
        ...state.signUpForm,
        [name]: value,
      },
    }));
  },

  checkUsername: async () => {
    try {
      set({ isLoading: true });
      if (!isValidUsername(get().signUpForm.username)) {
        return toast.error("Invalid username");
      }
      const response = await api.get(
        `/api/users/check-username/${get().signUpForm.username}`
      );
      toast.success(response.data.message);
      set({ usernameUnique: true });
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Username not found, try others");
      set({ usernameUnique: false, isLoading: false });
      return false;
    }
  },

  onSignup: async (e) => {
    e.preventDefault();
    console.log(get().signUpForm);
    try {
      const response = await api.post("/api/users/signup", get().signUpForm);
      const { token } = response;
      Cookies.set("bifolioJwt", token, { expires: 2 / 24 });
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  },
  onLogin: async () => {
    try {
      const response = await api.post("/api/users/login", get().signUpForm);
      const { token } = response.data;
      Cookies.set("bifolioJwt", token, { expires: 2 / 24 });
      console.log(token);
      toast.success(response.data.message);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  onForgotPassword: async () => {
    set({ apiState: apiStatus.init });
    const email = get().signUpForm.email;
    if (
      email === "" ||
      !email ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      toast.error("Invalid email address");
      return true;
    }
    try {
      set({ apiState: apiStatus.loading });
      const response = await api.post("/api/users/forgot-password", { email });
      toast.success(response.data.message);
      set({ apiState: apiStatus.success });
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Error sending reset password email");
      set({ isLoading: false, apiState: apiStatus.error });
      return false;
    }
  },

  verifyUserToken: async (verifyToken) => {
    set({ apiState: apiStatus.init });
    try {
      set({ isLoading: true });
      const response = await api.get(
        `/api/users/reset-password?verify=${verifyToken}`
      );
      if (response.status === 200) {
        console.log("Token verified successfully");
      }
      set({
        apiState: apiStatus.success,
        isLoading: false,
        signUpForm: { ...get().signUpForm, email: response.data.user.email },
      });
      return true;
    } catch (error) {
      console.log(error);
      set({ isLoading: false, apiState: apiStatus.error });
      return false;
    }
  },

  changePassword: async () => {
    const { email, password } = get().signUpForm;
    if (email === "" || password === "") {
      toast.error("Email and password are required");
      return false;
    }
    try {
      set({ apiState: apiStatus.loading });
      const response = await api.post("/api/users/change-password", {
        email,
        password,
      });
      toast.success(response.data.message);
      set({ apiState: apiStatus.success });
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Error resetting password, please try again later.");
      set({ apiState: apiStatus.error });
      return false;
    }
  },
}));

export default useAuthStore;
