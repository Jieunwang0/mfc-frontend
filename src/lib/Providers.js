"use client";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "./store";
import ModalManager from "@/components/common/Modal";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
        <ModalManager />
      </Provider>
    </SessionProvider>
  );
}
