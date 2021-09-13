import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import mountainsIcon from '../public/images/mountainsIcon.png';
import { Mail, Linkedin, GitHub } from 'react-feather';
import HomeLink from '../components/HomeLink';
import Spacer from '../components/utils/Spacer';
import Divider from '../components/utils/Divider';

const About = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | About</title>
        <meta
          name='description'
          content='Peter Millspaugh - Frontend Developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeLink />
      <Wrapper>
        <ContentWrapper>
          <Spacer size='24px' />
          <ImageWrapper>
            <Image
              src={mountainsIcon}
              alt='Graphic of two snow-capped mountains with pine trees'
            />
          </ImageWrapper>
          <Spacer size='30px' />
          <Heading>About</Heading>
          <Spacer size='24px' />
          <Divider />
          <Spacer size='36px' />
          <SubHeading>Hi there 👋</SubHeading>
          <Spacer size='20px' />
          <Paragraph>Thanks for visiting my site!</Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            I&apos;m Peter (or Pete – your call), and I&apos;m a developer based
            in New York.
          </Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            I enjoy working across the stack in the TypeScript/JavaScript
            ecosystem (React, Redux, Node.js) with a core focus on frontend
            technologies. I&apos;m especially excited about Accessibility and
            PWAs. In July, I gave a{' '}
            <Link href='/talks' passHref>
              <AnchorLink>talk on Web Accessibility</AnchorLink>
            </Link>{' '}
            – let me know what you think!
          </Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            Recently, I&apos;ve been working with a terrific team on{' '}
            <Link href='/work' passHref>
              <AnchorLink>tulo.js</AnchorLink>
            </Link>
            , an open-source developer tool for client-side caching via service
            workers. I&apos;m also building{' '}
            <Link href='/work' passHref>
              <AnchorLink>non-prophet</AnchorLink>
            </Link>
            , an e-commerce brand. Once it officially launches, all profit will
            go to the Equal Justice Initiative.
          </Paragraph>
          <Spacer size='20px' />
          <Paragraph>
            When I&apos;m not coding, I do a lot of cooking (
            <em>read: pasta</em>) and running.
          </Paragraph>
          <Spacer size='28px' />
          <SubHeading id='contact'>Let&apos;s connect! ☕</SubHeading>
          <Spacer size='20px' />
          <IconWrapper>
            <IconLink
              href='mailto:peterdgmillspaugh@gmail.com'
              aria-label="Peter's email address"
            >
              <Mail size={24} />
            </IconLink>
            <Spacer size='20px' />
            <IconLink
              href='https://www.linkedin.com/in/peter-millspaugh/'
              aria-label="Peter's LinkedIn profile"
            >
              <Linkedin size={24} />
            </IconLink>
            <Spacer size='20px' />
            <IconLink
              href='https://github.com/pmillspaugh'
              aria-label="Peter's GitHub profile"
            >
              <GitHub size={24} />
            </IconLink>
          </IconWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
  background-color: ${(p) => p.theme.primaryBg};
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 36px;

  @media (min-width: 592px) {
    padding: 72px;
  }

  @media (min-width: 768px) {
    padding: 72px 108px;
  }

  @media (min-width: 992px) {
    padding: 72px 144px;
  }

  @media (min-width: 1200px) {
    padding: 72px 180px;
    max-width: 1380px;
  }
`;

const ImageWrapper = styled.div`
  width: 250px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: ${(p) => p.theme.headingColor};
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  width: 100%;
  color: ${(p) => p.theme.textColor};
`;

const Paragraph = styled.p`
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${(p) => p.theme.textColor};

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const AnchorLink = styled.a`
  color: ${(p) => p.theme.linkTextColor};

  &:hover {
    color: ${(p) => p.theme.linkTextColorHover};
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const IconLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(p) => p.theme.buttonBg};
  color: ${(p) => p.theme.buttonTextColor};

  &:hover {
    background-color: ${(p) => p.theme.buttonBgHover};
  }
`;

export default About;
