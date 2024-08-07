import React from 'react';
import { FooterLogo } from '@/assets';
import {
  TAG_CONTENT,
  BOLD_CONTENT,
  RIGHT_CONTAINER_LINKS,
} from '@/constants/message';
import * as S from './Footer.style';

const Footer = () => (
  <footer css={S.footerContainer}>
    <div css={S.footerWrapper}>
      <div css={S.leftContainer}>
        <div css={S.logoContainer}>
          <FooterLogo />
        </div>
        <div css={S.tagContent}>
          {TAG_CONTENT.map((text) => (
            <p css={S.textLabel} key={text}>
              {text}
            </p>
          ))}
        </div>
        <div css={S.boldContent}>
          <p css={S.email}>{BOLD_CONTENT.emailLabel}</p>
          <p css={S.textLabel}>{BOLD_CONTENT.email}</p>
        </div>
      </div>
      <div css={S.rightContainer}>
        {RIGHT_CONTAINER_LINKS.map((text) => (
          <p
            css={text === '개인정보처리방침' ? S.subLabel : S.linkLabel}
            key={text}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
