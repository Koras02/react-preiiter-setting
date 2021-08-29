/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Slider from 'react-slick';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <>
      <div className="app">
        <div>
          <div className="App">코드 정렬</div>
          <div className="Slider">
            <Slider {...settings}>
              <div className="Slider-img">
                <img
                  className="Slider-img"
                  src="https://mblogthumb-phinf.pstatic.net/MjAxODEyMDVfMTgg/MDAxNTQ0MDA3NDgyNjM3._OVZI1LYTYdyEI2qKPC47MJLT9UhVUadypz6a8g6Xcsg.8pCkwEiQLtxYvCFRR-F4F5r3_fM0GUjn5B8zV3FMPhkg.GIF.nang723/IMG_0838.GIF?type=w800"
                />
              </div>
              <div className="Slider-img">
                <img
                  className="Slider-img"
                  src="https://mblogthumb-phinf.pstatic.net/MjAxODEyMDVfMTgg/MDAxNTQ0MDA3NDgyNjM3._OVZI1LYTYdyEI2qKPC47MJLT9UhVUadypz6a8g6Xcsg.8pCkwEiQLtxYvCFRR-F4F5r3_fM0GUjn5B8zV3FMPhkg.GIF.nang723/IMG_0838.GIF?type=w800"
                />
              </div>{' '}
              <div className="Slider-img">
                <img
                  className="Slider-img"
                  src="https://mblogthumb-phinf.pstatic.net/MjAxODEyMDVfMTgg/MDAxNTQ0MDA3NDgyNjM3._OVZI1LYTYdyEI2qKPC47MJLT9UhVUadypz6a8g6Xcsg.8pCkwEiQLtxYvCFRR-F4F5r3_fM0GUjn5B8zV3FMPhkg.GIF.nang723/IMG_0838.GIF?type=w800"
                />
              </div>{' '}
              <div className="Slider-img">
                <img
                  className="Slider-img"
                  src="https://mblogthumb-phinf.pstatic.net/MjAxODEyMDVfMTgg/MDAxNTQ0MDA3NDgyNjM3._OVZI1LYTYdyEI2qKPC47MJLT9UhVUadypz6a8g6Xcsg.8pCkwEiQLtxYvCFRR-F4F5r3_fM0GUjn5B8zV3FMPhkg.GIF.nang723/IMG_0838.GIF?type=w800"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
