import React from 'react';

type ErrorBoundaryProps = {
  children?: React.ReactNode;
};
type ErrorBoundaryState = {
  hasError: boolean;
  error?: string;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error as string };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <h2>{this.state.error}</h2>
        </>
      );
    }

    return this.props.children;
  }
}
