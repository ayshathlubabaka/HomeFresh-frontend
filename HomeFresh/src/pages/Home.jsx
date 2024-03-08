import React, { useState } from 'react'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';


import { useSpring, animated } from 'react-spring';


import animationDataa from '../LotttieFiles/Animation - 1709906051167.json'

function Home() {

    const [textIndex, setTextIndex] = useState(0);

    const textVariants = [

        'Fresh, Organic, and Nearby ',
        'Enjoy Locally Grown Organic',
        'Farm-Fresh Organic Delivered',
        'Delicious and Organic Foods',


    ];

    const textmultipleAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0.7 },
        reset: true,
        config: { duration: 3000, tension: 600, friction: 20 },
        onRest: () => {
            // Change text when the animation finishes
            setTextIndex((prevIndex) => (prevIndex + 1) % textVariants.length);
        },
    });
    return (
        <div className="relative rounded-3xl p-6 sm:p-12 mt-8 sm:mt-24 mr-4 sm:mr-28 ml-4 sm:ml-28 flex flex-col sm:flex-row shadow-xl border border-gray-200">
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl sm:text-5xl font-bold mt-6 sm:mt-16 text-center sm:text-left tracking-wide">
            Nourish Your <span className="text-3xl sm:text-5xl font-bold mt-2 sm:mt-16 text-center text-green-500 tracking-wide" style={{ color: '#4caf50' }}>Body</span>
          </h1>
          <h1 className="text-3xl sm:text-5xl font-bold mt-6 text-center sm:text-left tracking-wide">
          Rejuvenate Your <span className="text-3xl sm:text-5xl font-bold mt-2 text-center tracking-wide" style={{ color: '#4caf50' }}>Soul</span>
          </h1>
          <animated.h2 className="text-xl sm:text-3xl font-bold mt-6 text-center sm:text-left tracking-wide" style={{ ...textmultipleAnimation, color: '#4caf50' }}>
            {textVariants[textIndex]}
          </animated.h2>
          <Button
            variant="contained"
            style={{ backgroundColor: '#4caf50', height: '50px', fontWeight: 'bold', fontSize: '16px'}}
            sx={{ marginTop: '50px', borderRadius: '20px' }}
          >
            Get started
          </Button>
        </div>
        <div className="w-full sm:w-1/2 mt-8 sm:mt-0 ml-6">
          <Lottie animationData={animationDataa} className="mx-auto sm:ml-0 mb-8 sm:mb-0 w-64 h-64 sm:w-96 sm:h-96" />
        </div>
      </div>




    )
}

export default Home