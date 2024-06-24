'use client';
import React, { useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import chevronleft from "../public/Images/arrow-left.svg";
import chevronright from "../public/Images/arrow-right.svg";

function Collection() {
    const sliderData = [
        { id: 1, title: 'Item 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', country: 'USA', image: 'https://free-vue-demo.tailadmin.com/assets/user-01-OMqtv7h9.png', date: '14 June 2024' },
        { id: 2, title: 'Item 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', country: 'Canada', image: 'https://free-vue-demo.tailadmin.com/assets/user-01-OMqtv7h9.png', date: '14 June 2024' },
        { id: 3, title: 'Item 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', country: 'UK', image: 'https://free-vue-demo.tailadmin.com/assets/user-01-OMqtv7h9.png', date: '14 June 2024' },
        { id: 4, title: 'Item 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', country: 'Australia', image: 'https://free-vue-demo.tailadmin.com/assets/user-01-OMqtv7h9.png', date: '14 June 2024' },
        { id: 5, title: 'Item 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', country: 'Germany', image: 'https://free-vue-demo.tailadmin.com/assets/user-01-OMqtv7h9.png', date: '14 June 2024' },
        { id: 6, title: 'Item 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', country: 'France', image: 'https://free-vue-demo.tailadmin.com/assets/user-01-OMqtv7h9.png', date: '14 June 2024' },
        // Add more items as needed
    ];


    const splideOptions = {
        type: 'loop',
        perPage: 3,
        arrows: false,
        pagination: false,
        gap: '1rem',
        autoplay: true,
        perMove: 1,
        interval: 3000,

        autoScroll: {
            speed: 1,
            pauseOnHover: true,
            pauseOnFocus: false,
        },
        breakpoints: {
            1200: {
                perPage: 2,
                gap: '1rem',
            },
            991: {
                perPage: 2,
                gap: '1rem',
            },
            767: {
                perPage: 2,
                gap: '0.5rem',
            },
            575: {
                perPage: 1,
                arrows: false,
                gap: '1rem',
            },
        },
    };

    const splideRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const prevSlide = () => {
        if (splideRef.current) {
            splideRef.current.go('-1');
        }
    };

    const nextSlide = () => {
        if (splideRef.current) {
            splideRef.current.go('+1');
        }
    };

    return (
        <div className="container mx-auto px-4 mt-8">
            <Splide options={splideOptions} ref={splideRef} onMoved={(splide) => {
                const progressValue = (splide.index / (splide.length - 1)) * 100;
                setProgress(progressValue);
            }}>
                {sliderData.map(item => (
                    <SplideSlide key={item.id} className='flex justify-center mt-10'>
                        <div className="bg-white rounded-4 shadow-soft-shadow py-10 px-5 rounded-2xl">
                            <div className="flex gap-3 items-center">
                                <div className="">
                                    <img src={item.image} alt="User" className="max-w-12 h-12" />
                                </div>
                                <div className="">
                                    <h3 className="text-base sm:text-lg font-semibold text-black-900">{item.title}</h3>
                                    <div className="flex gap-2">
                                        <h6 className="text-base text-gray-400 font-normal">{item.country}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <p className="text-gray-600 font-normal text-base sm:text-lg h-36 overflow-hidden">{item.description}</p>
                                <p className="text-Blue-200 font-normal text-base sm:text-lg mt-10">{item.date}</p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
            <div className="block flex items-center justify-between my-8">
                <button className="prev" onClick={prevSlide}>
                    <div className="fas fa-chevron-left text-gray-300 hover:text-white border border-gray-300 rounded-md w-[35px] h-[35px] flex justify-center items-center">
                        <img src={chevronleft.src} alt="checronleft" />
                    </div>
                </button>
                <div className="progress-bar bg-gray-500 h-[2px] flex-1 mx-4">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <button className="next" onClick={nextSlide}>
                    <div className="fas fa-chevron-right text-gray-300 hover:text-white border border-gray-300 rounded-md w-[35px] h-[35px] flex justify-center items-center">
                        <img src={chevronright.src} alt="checronleft" />
                    </div>
                </button>
            </div>

        </div>
    );
}

export default Collection;