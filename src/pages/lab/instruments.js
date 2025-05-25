// pages/lab/instruments.js
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function Instruments() {
  return (
    <Layout>
      <Head>
        <title>Instruments | Our Lab</title>
      </Head>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Lab Instruments</h1>
        <p className="text-gray-700 mb-4">
          Our lab is equipped with state-of-the-art instruments to conduct water quality analysis,
          membrane separation experiments, and advanced treatment studies.
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Spectrophotometer</li>
          <li>Membrane filtration units</li>
          <li>Gas chromatograph</li>
          <li>High-speed centrifuge</li>
          <li>Digital pH and DO meters</li>
        </ul>
      </section>
    </Layout>
  );
}
