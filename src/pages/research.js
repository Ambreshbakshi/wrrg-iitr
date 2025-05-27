//research.js page
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { publications, patents, invitedTalks } from '@/content/research';
import PublicationCard from '@/components/research/PublicationCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Tabs from '@/components/research/tabs';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Research() {
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState('papers');

  useEffect(() => {
    if (tab && ['papers', 'books', 'patents', 'talks'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [tab]);

  return (
    <Layout>
      <Head>
        <title>Research | Water Resources Group</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <SectionTitle 
          title="Our Research" 
          subtitle="Innovative approaches to water resources challenges"
          align="center"
        />

        <Tabs 
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            router.push(`/research?tab=${tab}`, undefined, { shallow: true });
          }}
          tabs={[
            { id: 'papers', label: 'Research Papers' },
            { id: 'books', label: 'Books' },
            { id: 'patents', label: 'Patents' },
            { id: 'talks', label: 'Invited Talks' },
          ]}
        />

        {activeTab === 'papers' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Journal Articles</h3>
            {publications.journalArticles.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
{/* <h3 className="text-2xl font-semibold mb-6 mt-12 text-gray-800">Conference Papers</h3>
 {Array.isArray(publications.conferences) && publications.conferences.filter(Boolean).length > 0 ? (
  publications.conferences
    .filter((pub) => pub && pub.title) // Filter out null/undefined and objects missing title
    .map((pub) => (
      <PublicationCard key={pub.id || Math.random()} publication={pub} />
    ))
) : (
  <p className="text-gray-600">No conference papers available at this time.</p>
)} */}


  
          </div>
        )}

        {activeTab === 'books' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Books</h3>
            {publications.books.map((book) => (
              <PublicationCard key={book.id} publication={book} />
            ))}
          </div>
        )}

        {activeTab === 'patents' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Patents</h3>
            {patents.map((patent) => (
              <div key={patent.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{patent.title}</h4>
                <p className="text-sm text-gray-600 mb-1"><strong>Inventors:</strong> {patent.inventors.join(', ')}</p>
                {patent.patentNumber && (
                  <p className="text-sm text-gray-600 mb-1"><strong>Patent Number:</strong> {patent.patentNumber}</p>
                )}
                {patent.filingDate && (
                  <p className="text-sm text-gray-600 mb-1"><strong>Filing Date:</strong> {patent.filingDate}</p>
                )}
                <p className="text-sm text-gray-600 mb-3"><strong>Status:</strong> {patent.status}</p>
                {patent.link && (
                  <a
                    href={patent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Patent
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'talks' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Invited Talks</h3>
            {invitedTalks.map((talk) => (
              <div key={talk.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{talk.title}</h4>
                <p className="text-sm text-gray-600 mb-1"><strong>Speaker:</strong> {talk.speaker}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Event:</strong> {talk.event}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {talk.location}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Year:</strong> {talk.year}</p>
                <p className="text-sm text-gray-600 mt-2">{talk.abstract}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
