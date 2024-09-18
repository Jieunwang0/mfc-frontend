"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import ModalManager from "@/components/common/Modal";

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
      <ModalManager />
    </Provider>
  );
}
