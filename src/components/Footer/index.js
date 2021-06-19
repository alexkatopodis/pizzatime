import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="#hero">Pizza St<span>OO</span>m</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='//www.linkedin.com/in/alex-katopodis-849a6252/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/alex-katopodis-849a6252/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/alex-katopodis-849a6252/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/alex-katopodis-849a6252/' target='_blank' aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/alex-katopodis-849a6252/' target='_blank' aria-label='Linkedin' rel='noopener noreferrer'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
