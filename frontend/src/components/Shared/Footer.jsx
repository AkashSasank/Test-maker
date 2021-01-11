import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FooterDiv, SocialIcons } from './style';

export default class Footer extends React.Component
{
  render()
  {
    return (
		<FooterDiv>
		  <div class="container">
			<div class="row">
			  <div class="col-sm-12 col-md-6">
				<h6>About</h6>
				<p class="text-justify"> Online Mentoring and Tutoring platform</p>
			  </div>
	
			  <div class="col-xs-6 col-md-3">
				<h6>Quick Links</h6>
				<ul class="footer-links">
				  <li><a href="https://auraclelearning.wixsite.com/auracle">About Us</a></li>
				  <li><a href="https://auraclelearning.wixsite.com/auracle">Contact Us</a></li>
				  <li><a href="https://auraclelearning.wixsite.com/auracle">Privacy Policy</a></li>
				</ul>
			  </div>
			</div>
			</div>
		  <div class="container">
		  <hr />
			<div class="row">
			  <div class="col-md-8 col-sm-6 col-xs-12">
				<p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
			 <a href="https://auraclelearning.wixsite.com/auracle"> AURACLE LEARNING</a>.
				</p>
			  </div>
	
			  <SocialIcons class="col-md-4 col-sm-6 col-xs-12">
				<ul class="social-icons">
				  <li><a class="facebook" href="/"><FontAwesomeIcon icon={ faFacebook } /></a></li>
				  <li><a class="twitter" href="/"><FontAwesomeIcon icon={ faTwitter } /></a></li>
				  <li><a class="dribbble" href="/"><FontAwesomeIcon icon={ faDribbble } /></a></li>
				  <li><a class="linkedin" href="/"><FontAwesomeIcon icon={ faLinkedin } /></a></li>   
				</ul>
			  </SocialIcons>
			</div>
		  </div>
	</FooterDiv>       
    )
  }
}