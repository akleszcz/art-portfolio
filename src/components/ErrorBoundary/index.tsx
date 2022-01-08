import React, { Component, ErrorInfo, ReactNode } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    errorMessage: '',
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <div>
        <h1>Something went wrong!</h1>
        <div>{this.state.errorMessage}</div>
      </div>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
