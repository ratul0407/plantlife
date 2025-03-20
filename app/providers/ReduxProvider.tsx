"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
interface reduxProvider {
  children: React.ReactNode;
}
export const ReduxProvider: React.FC<reduxProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
