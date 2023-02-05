import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log the error to a service or local storage for debugging purposes
  }

  render() {
    if (this.state.hasError) {
      return 
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
