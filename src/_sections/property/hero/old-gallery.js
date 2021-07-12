import React, { useEffect, useState, Fragment } from 'react';
import Swiper from "react-id-swiper";
import 'swiper/swiper-bundle.min.css';
import styled from 'styled-components';


const GalleryCont = styled.div`
  width: 100%;
`
const GalleryItem = styled.div`
  height: 450px;
  width: 100%;
  background-size: cover;
  background-image: url(${props => props.url});
`
const GalleryThumbCont = styled.div`
  //border: 1px solid red;
  margin: 0 !important;
  background-color: ${props => props.theme.main.primaryColor};
`
const GalleryThumb = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 6px;
  background-size: cover;
  background-image: url(${props => props.url});
`

export default ({ images })=> {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    lazy: true,
    slidesPerView: "auto",
    centeredSlides: true,
    slidesPerView: 1,
    /*navigation: {
      nextEl: ".swiper-button-next.customized-swiper-button-next",
      prevEl: ".swiper-button-prev.customized-swiper-button-prev",
    },*/
    containerClass: "customized-swiper-container",
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: "auto",
    centeredSlides: true,
    slideToClickedSlide: true,
    containerClass: "customized-swiper-container-thumb",
  };

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  return(
    <GalleryCont>
      <Swiper {...gallerySwiperParams}>
        {images.map((i) => (
          <GalleryItem url={i} />
        ))}
      </Swiper>
      <GalleryThumbCont>
          <Swiper {...thumbnailSwiperParams}>
            {images.map((i) => (
              <GalleryThumb url={i} />
            ))}
          </Swiper>        
      </GalleryThumbCont>
    </GalleryCont>
  )
}