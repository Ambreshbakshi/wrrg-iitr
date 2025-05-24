import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { researchAreas, publications } from '@/content/research';
import ResearchAreaCard from '@/components/research/ResearchAreaCard';
import PublicationCard from '@/components/research/PublicationCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Tabs from '@/components/people/Tabs';
import { useState } from 'react';

export default function Research() {
  const [activeTab, setActiveTab] = useState('areas');

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
          setActiveTab={setActiveTab}
          tabs={[
            { id: 'areas', label: 'Research Areas' },
            { id: 'publications', label: 'Publications' },
            { id: 'projects', label: 'Projects' }
          ]}
        />

        {activeTab === 'areas' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {researchAreas.map((area) => (
              <ResearchAreaCard key={area.id} area={area} />
            ))}
          </div>
        )}

        {activeTab === 'publications' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Journal Articles
            </h3>
            {publications.journalArticles.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}

            <h3 className="text-2xl font-semibold mb-6 mt-12 text-gray-800">
              Conference Papers
            </h3>
            {publications.conferences.slice(0, 5).map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="mt-8">
            <p className="text-gray-700">
              Our current research projects will be listed here...
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}