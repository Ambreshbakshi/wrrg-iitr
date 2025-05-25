// pages/lab/facilities.js
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function Facilities() {
  return (
    <Layout>
      <Head>
        <title>Facilities | Our Lab</title>
      </Head>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Lab Facilities</h1>
        <p className="text-gray-700 mb-4">
          Our lab offers a wide range of facilities to support experimental and computational research,
          including wet labs, dry labs, and a dedicated computing cluster.
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Dedicated wet-lab space with benches and ventilation</li>
          <li>Sample preparation and chemical storage room</li>
          <li>Computer lab with simulation software</li>
          <li>Collaborative workspace for project discussions</li>
        </ul>
      </section>
    </Layout>
  );
}
