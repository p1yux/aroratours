"use client"
import { motion } from 'framer-motion';
import { FaCarSide, FaUserTie, FaHotel, FaMoneyBillWave } from 'react-icons/fa';
import React from 'react';

const About = () => {
  const features = [
    {
      icon: <FaCarSide className="text-4xl text-primary" />,
      title: "40+ Years of Experience",
      description: "Decades of expertise in crafting unforgettable travel experiences across India. Trust in our legacy of excellence and dedication."
    },
    {
      icon: <FaUserTie className="text-4xl text-primary" />,
      title: "Professional Drivers",
      description: "Our skilled and experienced drivers ensure your safety and comfort throughout your journey, with extensive knowledge of routes and locations."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary" />,
      title: "Customizable Pricing",
      description: "Flexible and transparent pricing options tailored to your needs and budget. We believe in providing value without compromising quality."
    },
    {
      icon: <FaHotel className="text-4xl text-primary" />,
      title: "Complete Travel Management",
      description: "From luxury cars to comfortable hotels, we handle all aspects of your travel needs with attention to detail and personalized service."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
          About Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          Delivering excellence in travel services since 1983
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600">
          With over four decades of experience in the travel industry, we've built a reputation for reliability, 
          excellence, and customer satisfaction. Our commitment to providing top-notch service, combined with our 
          extensive network of resources, makes us your ideal travel partner.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
