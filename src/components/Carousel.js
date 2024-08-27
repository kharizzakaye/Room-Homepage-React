import React, { useState } from "react";

import arrowIcon from "../assets/icons/icon-arrow.svg";
import arrowLeft from "../assets/icons/icon-angle-left.svg";
import arrowRight from "../assets/icons/icon-angle-right.svg";

import desktopHero1 from "../assets/images/desktop/desktop-image-hero-1.jpg";
import desktopHero2 from "../assets/images/desktop/desktop-image-hero-2.jpg";
import desktopHero3 from "../assets/images/desktop/desktop-image-hero-3.jpg";
import mobileHero1 from "../assets/images/mobile/mobile-image-hero-1.jpg";
import mobileHero2 from "../assets/images/mobile/mobile-image-hero-2.jpg";
import mobileHero3 from "../assets/images/mobile/mobile-image-hero-3.jpg";


const carouselData = [
    {
        id: 1,
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your style with our collection and make your property a reflection of you and what you love.",
        imageForDesktop: desktopHero1,
        imageForMobile: mobileHero1,
    },
    {
        id: 2,
        title: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        imageForDesktop: desktopHero2,
        imageForMobile: mobileHero2,
    },
    { 
        id: 3,
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        imageForDesktop: desktopHero3,
        imageForMobile: mobileHero3,
    }
];
  

export default function Carousel() {
    const [carouselSliderData] = useState(carouselData);
    const [carouselIndex, setCarouselIndex] = useState(1);

    function viewNextSlide()
    {
        if (carouselIndex !== carouselSliderData.length)
        {
            setCarouselIndex(carouselIndex + 1);
        }
        if (carouselIndex === carouselSliderData.length)
        {
            setCarouselIndex(1);
        }
    }

    function viewPreviousSlide()
    {
        if (carouselIndex !== 1)
        {
            setCarouselIndex(carouselIndex - 1);
        }
        if (carouselIndex === 1)
        {
            setCarouselIndex(carouselSliderData.length);
        }
    }

    return (
        <>
            <section>
                {carouselSliderData.map((item, index) => (
                    <article 
                        key={item.id}
                        className={ 
                            carouselIndex === index + 1
                                ? "grid grid-cols-1 lg:grid-cols-2"
                                : "hidden"
                        }
                    >
                        <div className="relative">
                            <picture>
                                <source media="(min-width: 768px)" srcSet={item.imageForDesktop} />
                                <img 
                                    src={item.imageForMobile} 
                                    alt={item.title}
                                    className="w-full"
                                />
                            </picture>

                            <ul className="absolute -bottom-2 right-0 flex">
                                <li>
                                    <button
                                        className="bg-black hover:bg-neutral-700 transition-all duration-200"
                                        onClick={viewPreviousSlide}
                                    >
                                        <img className="p-6" src={arrowLeft} alt="Arrow left icon for previous button"/>
                                    </button>
                                </li>

                                <li>
                                    <button
                                        className="bg-black hover:bg-neutral-700 transition-all duration-200"
                                        onClick={viewNextSlide}
                                    >
                                        <img className="p-6" src={arrowRight} alt="Arrow left icon for next button"/>
                                    </button>
                                </li>
                            </ul>
                            
                        </div>

                        <div className="p-8 lg:p-12">
                            <h1 className="text-slate-900 text-3xl lg:text-5xl"><strong>{item.title}</strong></h1>
                            <p className="text-slate-900 opacity-75 my-6">{item.description}</p>
                            <button 
                                className="flex items-center gap-4 uppercase hover:opacity-75"
                                style={{letterSpacing: "0.7rem"}}>
                                Shop Now 
                                <img src={arrowIcon} alt="Arrow icon for Shop Now button"/>
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}