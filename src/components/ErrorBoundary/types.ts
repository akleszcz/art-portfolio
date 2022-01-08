import { ReactNode } from "react";

export type ErrorBoundaryProps = {
  children: ReactNode;
};

export type ErrorBoundaryState = {
  errorMessage: string;
  hasError: boolean;
};
