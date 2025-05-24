// pages/lab.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';

const labImages = [
  '/images/lab/lab1.jpg',
  '/images/lab/lab2.jpg',
  '/images/lab/lab3.jpg',
];

export default function Lab() {
  const [current, setCurrent] = useState(0);
  const total = labImages.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <Layout>
      <Head>
        <title>Our Lab | Water Resources Research Group</title>
      </Head>

      {/* Slideshow Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Lab Facilities</h2>

          <div className="relative w-full max-w-3xl mx-auto h-80 sm:h-[400px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src={labImages[current]}
              alt={`Lab image ${current + 1}`}
              fill
              className="object-cover transition duration-500"
              priority
            />
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 px-4 py-2 text-xl rounded-r"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 px-4 py-2 text-xl rounded-l"
            >
              ›
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">{current + 1} / {total}</p>
        </div>
      </section>

      {/* About the Lab */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Lab</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our laboratory at the WRDM Department, IIT Roorkee, is equipped with advanced
            facilities for water treatment, wastewater analysis, and membrane bioreactor studies.
            We focus on cutting-edge research integrating experimentation with computational fluid dynamics.
            Our goal is to support sustainable solutions to real-world water management challenges.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Our Lab</h2>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.5364553710346!2d77.89808!3d29.863372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzQ5LjAiTiA3N8KwNTMnNTMuOCJF!5e0!3m2!1sen!2sin!4v1716474800000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lab Location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
