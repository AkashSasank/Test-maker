import { Component } from "react";

import { Container, Heading, Message } from "./style";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Heading>Something went wrong!</Heading>
          <Message>
            Something seriously went wrong somewhere. Check the logs.
          </Message>
        </Container>
      );
    }

    return this.props.children;
  }
}
