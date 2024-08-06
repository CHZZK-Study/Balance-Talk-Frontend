import React from 'react';
import { FooterLogo } from '@/assets';
import * as S from './Footer.style';
import { boldContent, footerWrapper, tagContent } from './Footer.style';

const Footer = () => (
  <footer css={S.footerContainer}>
    <div css={S.footerWrapper}>
      <div css={S.leftContainer}>
        <div css={S.logoContainer}>
          <FooterLogo />
        </div>
        <div css={S.tagContent}>
          <p css={S.textLabel}>#_몰입하는 즐거움</p>
          <p css={S.textLabel}>#_함께하는 즐거움</p>
          <p css={S.textLabel}>#취지직 스터디</p>
          <p css={S.textLabel}>&nbsp;</p>
          <p css={S.textLabel}>프로젝트 3팀</p>
        </div>
        <div css={S.boldContent}>
          <p css={S.email}>개발 이슈 관련 이메일</p>
          <p css={S.textLabel}>picko12300@gmail.com</p>
        </div>
      </div>
      <div css={S.rightContainer}>
        <p css={S.linkLabel}>오늘의 톡픽</p>
        <p css={S.linkLabel}>톡픽 쓰기</p>
        <p css={S.linkLabel}>톡&픽 플레이스</p>
        <p css={S.linkLabel}>낼톡픽 투표하기</p>
        <p css={S.linkLabel}>랜덤 밸런스 게임</p>
        <p css={S.linkLabel}>주제별 밸런스게임</p>
        <p css={S.subLabel}>개인정보처리방침</p>
      </div>
    </div>
  </footer>
);

export default Footer;
