import { create } from "zustand";
import api from "../utils/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { isValidUsername } from "../utils/helper";

const useAuthStore = create((set, get) => ({
  signUpForm: {
    username: "",
    name: "",
    email: "",
    password: "",
  },
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
}));

export default useAuthStore;
