import React, { useState } from 'react'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import { AnimatePresence } from 'framer-motion';
import Carousal from '../Components/Carousal';


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
    <>
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
            style={{ backgroundColor: '#4caf50', height: '50px', fontWeight: 'bold', fontSize: '16px' }}
            sx={{ marginTop: '50px', borderRadius: '20px' }}
          >
            Get started
          </Button>
        </div>
        <div className="w-full sm:w-1/2 mt-8 sm:mt-0 ml-6">
          <Lottie animationData={animationDataa} className="mx-auto sm:ml-0 mb-8 sm:mb-0 w-64 h-64 sm:w-96 sm:h-96" />
        </div>
      </div>

      <div className="relative rounded-3xl p-6 sm:p-12 mt-8 sm:mt-24 mr-4 sm:mr-28 ml-4 sm:ml-28 flex flex-col sm:flex-row shadow-xl">

        <div className="w-full sm:w-1/3  p-4 shadow-3xl  rounded-3xl">

          <h1 className="text-2xl sm:text-5xl font-bold mt-6 sm:mt-2  text-center sm:text-left tracking-wide ml-8" style={{ color: '#4caf50' }}>
            Homemade Happiness <span className="text-3xl sm:text-4xl  font-bold text-center tracking-wide" style={{ color: '#000000', marginTop: '32px' }}>Savor the Flavors of Homegrown Organic Goodness</span>
          </h1>


        </div>
        <div className="w-full sm:w-2/3 mt-16 sm:mt-0 ml-6">
          <Carousal />

        </div>
      </div>

      <div className="relative rounded-3xl p-6 sm:p-12 mt-8 sm:mt-24 mr-4 sm:mr-28 ml-4 sm:ml-28 flex flex-col sm:flex-row shadow-xl">
        <div className="w-full sm:w-1/2 bg-slate-100 p-4 shadow-3xl border border-gray-400 rounded-3xl">
          <div className="w-1/3 bg-indigo-500 p-2 text-start mt-4 ml-8 rounded-bl-xl rounded-tr-xl rounded-br-xl shadow-2xl">
            <h3 className=" font-medium text-lg text-white ml-2"> Hi Gayatri</h3>
          </div>
          <div className="w-1/3 bg-indigo-500 p-2 text-start mt-4 ml-8 rounded-bl-xl rounded-tr-xl rounded-br-xl shadow-2xl">
            <h3 className=" font-medium text-lg text-white ml-2"> Is spinach available</h3>
          </div>

          <div className="w-1/3   p-2 text-start mt-4 ml-80 rounded-bl-xl rounded-tl-xl rounded-br-xl shadow-2xl mr-8" style={{ backgroundColor: '#4caf50' }}>
            <h3 className=" font-medium text-lg ml-2 text-white"> yes , its available </h3>
          </div>

          <div className="w-1/3 bg-indigo-500 p-2 text-start mt-4 ml-8 rounded-bl-xl rounded-tr-xl rounded-br-xl shadow-2xl">
            <h3 className=" font-medium text-lg text-white ml-2"> what is its cost ?</h3>
          </div>

          <div className="w-1/3   p-2 text-start mt-4 ml-80 rounded-bl-xl rounded-tl-xl rounded-br-xl shadow-2xl mr-8" style={{ backgroundColor: '#4caf50' }}>
            <h3 className=" font-medium text-lg ml-2 text-white"> 30 rs for a bundle</h3>
          </div>
          <div className="w-1/3 bg-indigo-500 p-2 text-start mt-4 ml-8 rounded-bl-xl rounded-tr-xl rounded-br-xl shadow-2xl">
            <h3 className=" font-medium text-lg text-white ml-2">Oh Great! I need four bundle</h3>
          </div>


          <div className="w-1/3   p-2 text-start mt-4 ml-80 rounded-bl-xl rounded-tl-xl rounded-br-xl shadow-2xl mr-8" style={{ backgroundColor: '#4caf50' }}>
            <h3 className=" font-medium text-lg ml-2 text-white"> Thanks for Order 😊</h3>
          </div>
          <div className="w-1/3 bg-indigo-500 p-2 text-start mt-4 ml-8 rounded-bl-xl rounded-tr-xl rounded-br-xl shadow-2xl">
            <h3 className=" font-medium text-lg text-white ml-2">👍👍👍👍👍👍</h3>
          </div>


        </div>
        <div className="w-full sm:w-1/2 mt-8 sm:mt-0 ml-6">
          <h1 className="text-2xl sm:text-5xl font-bold mt-6 sm:mt-16 text-center sm:text-left tracking-wide ml-8">
            Your <span className="text-3xl sm:text-5xl font-bold mt-2 text-center tracking-wide" style={{ color: '#4caf50' }}>Privacy Matters</span>
          </h1>
          <p className="text-xl leading-relaxed ml-10 mt-6 ">We prioritize your privacy. In our chat feature, we ensure your security by not sharing phone numbers with others. Enjoy hassle-free communication without any worries.</p>

        </div>
      </div>


      




    </>





  )
}

export default Home