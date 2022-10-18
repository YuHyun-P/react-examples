import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children?: ReactNode;
}
interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <div className="my-4 border p-4 text-start">
            <h2 className="text-xl text-center mb-4">Error Report</h2>
            {this.state.error.toString()}
            {this.state.errorInfo?.componentStack}
          </div>

          <br />

          {this.props.fallback && this.props.fallback}
        </>
      );
    }

    return <>{this.props.children}</>;
  }
}
