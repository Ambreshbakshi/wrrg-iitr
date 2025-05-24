// pages/contact.js
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact | Water Resources Research Group</title>
      </Head>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-gray-700 text-lg">
            Reach out to us for academic collaborations, student inquiries, or lab visits.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p><strong>Email:</strong> wrg.iitr@example.com</p>
            <p><strong>Phone:</strong> +91-1332-285XXX</p>
            <p><strong>Office:</strong> WRDM Department, IIT Roorkee, Uttarakhand, India</p>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visit Our Office</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="IIT Roorkee Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.3743663564924!2d77.89808!3d29.863372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzQ5LjAiTiA3N8KwNTMnNTMuOCJF!5e0!3m2!1sen!2sin!4v1629874599480!5m2!1sen!2sin"
              className="w-full h-96 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
