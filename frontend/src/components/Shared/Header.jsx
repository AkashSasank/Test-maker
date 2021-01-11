import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderDiv, HeaderRight } from './style';

export default class Header extends React.Component
{
	
  render()
  {
    return (
		<HeaderDiv>
			<a href="/" class="logo">Auracle Learning</a>
			<HeaderRight>
				<a  href="/" >Home</a>
				<a  href="/tests" >Tests</a>
				<a href="/log-in">Login</a>
			</HeaderRight>
		</HeaderDiv>
	)
  }
}