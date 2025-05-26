import { createContext } from "react";
import type { AuthContextType } from "./AuthContext";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});