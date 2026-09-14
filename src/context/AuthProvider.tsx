import { useState, type ReactNode } from "react";
import {
  AuthContext,
  type User,
} from "./AuthContext";

const AUTH_STORAGE_KEY = "dnd_auth_user";

function getStoredUser(): User | null {
  try {
    const storedUser = sessionStorage.getItem(
      AUTH_STORAGE_KEY,
    );

    if (!storedUser) {
      return null;
    }

    const parsedUser: unknown = JSON.parse(storedUser);

    if (
      typeof parsedUser !== "object" ||
      parsedUser === null ||
      !("name" in parsedUser) ||
      !("email" in parsedUser) ||
      typeof parsedUser.name !== "string" ||
      typeof parsedUser.email !== "string"
    ) {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    }

    return {
      name: parsedUser.name,
      email: parsedUser.email,
    };
  } catch {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(
    getStoredUser,
  );

  const saveUser = (nextUser: User) => {
    setUser(nextUser);

    sessionStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify(nextUser),
    );
  };

  const signIn = async (
    email: string,
    password: string,
  ) => {
    if (!email || !password) {
      throw new Error(
        "Email and password are required.",
      );
    }

    // Demo authentication delay.
    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 800);
    });

    const existingUser: User = {
      name: email.split("@")[0],
      email,
    };

    saveUser(existingUser);
  };

  const register = async (
    name: string,
    email: string,
    password: string,
  ) => {
    if (!name || !email || !password) {
      throw new Error("All fields are required.");
    }

    // Demo registration delay.
    // Password is intentionally not stored.
    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 900);
    });

    const newUser: User = {
      name,
      email,
    };

    saveUser(newUser);
  };

  const signOut = () => {
    setUser(null);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        signIn,
        register,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;