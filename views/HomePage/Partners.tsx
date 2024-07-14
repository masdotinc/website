import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const PARTNER_LOGOS = [
  '1.jpeg',
  '2.png',
  '3.jpg',
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>Official Partners With</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} layout="fill" objectFit="contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}

const Title = styled.h3`
  font-size: 1.5rem;
  letter-spacing: 0.02em;
  line-height: 0;
  margin-bottom: 2rem;
  text-align: center;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;


const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    position: relative; // Ensure this is set for NextImage with layout="fill"
    height: 130px; // Set a fixed height or make it responsive as needed
    width: 100%; // Ensure the slide has a width
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
