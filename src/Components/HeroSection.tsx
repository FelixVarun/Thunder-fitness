import React from 'react';
import backgroundImage from '../assets/images/fitness-muscular-man.jpg'; // Import the image

type Props = {};

function HeroSection({}: Props) {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Replace 'your-image-url.jpg' with the actual URL of your image
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%', // Adjust the vertical position here (20% will make it slightly lower)
        backgroundRepeat: 'no-repeat',
        height: '90%', // Set the desired height of the background image
        width: '100%' // Set the desired width of the background image
        // backgroundColor: "rgba(0, 0, 0, 0.7)" // Adjust the opacity here (0.5 means 50% opacity)
      }}>
      <div className=" flex flex-col items-center mt-6 lg:mt-20 ">
        {/* <div className="bg-fixed" style="background-image: url(...)">

      </div> */}

        <h1 className="text-4xl sm-text:6-xl lg-text:7-xl text-center tracking-wide text-white">
          Fitness is not a destination,
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {' '}
            it's a way of life.
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">
          One such establishment is the{' '}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {' '}
            Endurance Gym in Coimbatore
          </span>
          , which prides itself on providing state-of-the-art equipment and certified fitness
          trainers across a 4000 square foot area. With a focus on various aspects of physical
          fitness, including cardiovascular endurance, muscular strength, and flexibility, Endurance
          Gym has become a popular choice for fitness enthusiasts in the region.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-400 to-red-700 py-3 px-4 mx-3 rounded-md border">
            Start for free
          </a>
          <a href="#" className=" py-3 px-4 mx-3 rounded-md border text-white">
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
