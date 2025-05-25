// src/components/layout/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title = "Water Treatment & Management Group", description = "Research group led by Dr. Anshul Yadav at IIT Roorkee's WRDM Department" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="water resources, hydrology, IIT Roorkee, research group" />
        
        {/* Open Graph / Social Meta */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wrdm.iitr.ac.in" />
        <meta property="og:image" content="/images/social-preview.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}