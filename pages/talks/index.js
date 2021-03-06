import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import accessibilityThumbnail from '../../public/images/accessibilityThumbnail.png';
import HomeLink from '../../components/HomeLink';
import Layout from '../../components/utils/Layout';
import MaxWidthWrapper from '../../components/utils/MaxWidthWrapper';
import PageHeader from '../../components/utils/PageHeader';
import AnchorLink from '../../components/utils/AnchorLink';
import Spacer from '../../components/utils/Spacer';

const Talks = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | Talks</title>
        <meta name='description' content='Peter Millspaugh - Talks' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeLink />
      <Layout>
        <MaxWidthWrapper>
          <PageHeader page='Talks' />
          <Spacer size='8px' />
          <TalkWrapper>
            <TalkBlurb>
              <ThumbnailandHeadingWrapper>
                <div>
                  <Link href='/talks/accessibility' passHref>
                    <TalkLink>
                      Web Accessibility for Frontend Developers
                    </TalkLink>
                  </Link>
                  <Link href='/talks/accessibility#transcript' passHref>
                    <TranscriptLink>Read transcript &rarr;</TranscriptLink>
                  </Link>
                </div>
                <Spacer size='24px' />
                <ThumbnailWrapper>
                  <Thumbnail
                    src={accessibilityThumbnail}
                    alt="Cover slide of Peter's talk on Web Accessibility"
                  />
                </ThumbnailWrapper>
              </ThumbnailandHeadingWrapper>
            </TalkBlurb>
          </TalkWrapper>
        </MaxWidthWrapper>
      </Layout>
    </>
  );
};

const TalkWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TalkBlurb = styled.article`
  flex-basis: 100%;
  max-width: 800px;
  padding: 36px;
  background-color: ${(p) => p.theme.secondaryBg};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: 8px;
`;

const TalkLink = styled(AnchorLink)`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Ubuntu', sans-serif;
`;

const TranscriptLink = styled.a`
  display: block;
  margin-top: 8px;
  text-decoration: none;
  color: ${(p) => p.theme.textColor};
  font-weight: 800;

  &:hover {
    color: ${(p) => p.theme.linkTextColorHover};
  }
`;

const ThumbnailandHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ThumbnailWrapper = styled.div`
  max-width: 300px;
  line-height: 0;
`;

const Thumbnail = styled(Image)`
  border-radius: 8px;
`;

export default Talks;
