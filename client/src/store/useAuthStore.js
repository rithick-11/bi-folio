import { create } from "zustand";
import api from "../utils/api";
import { toast } from "react-toastify";
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
    
  },
}));

export default useAuthStore;
