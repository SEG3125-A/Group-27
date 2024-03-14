import React, { useState, useEffect } from 'react';
import '../static/styles/slideshow.css'
import tennis1 from '../static/images/tennis1.jpg' // image from https://unsplash.com/photos/person-in-white-nike-sneakers-playing-tennis-k0aVMMZwqtU
import tennis2 from '../static/images/tennis2.jpg' // image from https://unsplash.com/photos/green-tennis-balls-on-tennis-court-newhL3aprGk
import tennis3 from '../static/images/tennis3.jpg' // image from https://unsplash.com/photos/man-in-orange-shirt-and-black-shorts-holding-black-and-white-tennis-racket-2FKTyJqfWX8

const images = [tennis1, tennis2, tennis3];

const ImageSlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
      }, 5000);
      return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <div className="slideshow">
            {images.map((src, index) => (
            <div
                key={src}
                className="slide"
                style={{
                backgroundImage: `url(${src})`,
                transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
            </div>
            ))}
        </div>
    );
};

export default ImageSlideShow;
