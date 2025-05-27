// pages/lab/instruments.js
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { instruments } from '@/content/instrument';


export default function Instruments() {
  return (
    <Layout>
      <Head>
        <title>Instruments | Our Lab</title>
      </Head>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Lab Instruments</h1>
        <p className="text-gray-700 mb-10">
          Our lab is equipped with cutting-edge instruments for membrane research, material analysis, and
          advanced water treatment.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {instruments.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
            >
              <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  {item.name}
                </h2>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-gray-700 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Lab-scale Experimental Setups</h2>
          <ul className="list-disc pl-6">
            <li>
              Lab-scale experimental setups for <strong>Reverse Osmosis, Nanofiltration,
              Ultrafiltration, and Microfiltration</strong>.
            </li>
            <li>
              Lab-scale experimental setups for <strong>Forward Osmosis and Membrane Distillation</strong>.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
