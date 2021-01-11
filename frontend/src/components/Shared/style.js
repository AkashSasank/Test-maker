import styled from 'styled-components';

export const HeaderDiv = styled.header`
	overflow: hidden;
	background-color: #26272B;
	padding: 20px 10px;

	a {
		float: left;
		color: #737373;
		text-align: center;
		padding: 12px;
		text-decoration: none;
		font-size: 18px; 
		line-height: 25px;
		border-radius: 4px;

		&:hover {
			background-color: #ddd;
  			color: black;
		}
		&.logo {
			font-size: 25px;
			font-weight: bold;
		}
		&.active {
			background-color: dodgerblue;
    		color: white;
		}
		
	}
`;

export const HeaderRight = styled.div`
	float: right;
`;

export const FooterDiv = styled.footer`
	background-color:#26272b;
	padding:45px 0 20px;
	font-size:15px;
	line-height:24px;
	color:#737373;
	position: relative;
	width: -webkit-fill-available;
	bottom: 0;

	hr {
		border-top-color:#bbb;
		opacity:0.5;

		&.small {
			margin:20px 0;
		}		  
	}
	h6 {
		color:#fff;
		font-size:16px;
		text-transform:uppercase;
		margin-top:5px;
		letter-spacing:2px	  
	}
	a {
		color:#737373;
		
		&:hover {
			color:#3366cc;
  			text-decoration:none;
		}
		
	}
	.social-icons {
		text-align:right;
		padding-left:0;
  		margin-bottom:0;
  		list-style:none
		
		a {
			width:40px;
			height:40px;
			line-height:40px;
			margin-left:6px;
			margin-right:0;
			border-radius:100%;
			background-color:#33353d
		}
		li {
			display:inline-block;
  			margin-bottom:4px
		}
	}
	.copyright-text
	{
		margin:0
	}
`;

export const SocialIcons = styled.div`
	padding-left:0;
	margin-bottom:0;
	list-style:none

	li{
		display:inline-block;
		margin-bottom:4px;
		
		&.title{
			margin-right:15px;
			text-transform:uppercase;
			color:#96a2b2;
			font-weight:700;
			font-size:13px
		}
	}

	a{
		background-color:#eceeef;
		color:#818a91;
		font-size:16px;
		display:inline-block;
		line-height:44px;
		width:44px;
		height:44px;
		text-align:center;
		margin-right:8px;
		border-radius:100%;
		-webkit-transition:all .2s linear;
		-o-transition:all .2s linear;
		transition:all .2s linear;

		&:active, :focus, :hover{
			color:#fff;
  			background-color:#29aafe
		}
	}
`;