
// pages/lab/about.js
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function AboutLab() {
  return (
    <Layout>
      <Head>
        <title>About Lab | Our Lab</title>
      </Head>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">About Our Lab</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          The Water Resources Research Lab at IIT Roorkee specializes in water treatment, membrane
          bioreactor technology, and sustainable water reuse. Our interdisciplinary team combines
          expertise in civil engineering, chemistry, and computational modeling to address critical
          water challenges. With support from national and international collaborators, we aim to
          create impactful, scalable solutions for real-world water management.
        </p>
      </section>
    </Layout>
  );
}