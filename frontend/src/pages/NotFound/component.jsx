import React from "react";
import { Link } from 'react-router-dom';

import { Container, Heading, Message, Back } from './style';

export default function NotFound() {
  return (
    <Container>
      <Heading>Not found!</Heading>
      <Message>The page you are looking for doesn't exist.</Message>
      <Back as={Link} to="/">
        Go to Home
      </Back>
    </Container>
  );
}
