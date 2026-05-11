import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="p-6 text-red-600 text-xl">
            Something went wrong. Try refreshing the page.
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;