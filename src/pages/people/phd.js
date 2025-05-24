import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { phdScholars } from '@/content/people';
import PersonCard from '@/components/people/PersonCard';
import Tabs from '@/components/people/Tabs';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PhdPage() {
  return (
    <Layout>
      <Head>
        <title>PhD Scholars | WRDM Research Group</title>
      </Head>

      <div className="container mx-auto px-4 py-6">
        <Tabs activeTab="phd" />
        
        <SectionTitle
          title="PhD Research Scholars"
          subtitle="Current doctoral candidates in our group"
          className="mb-8"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phdScholars.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        {phdScholars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No current PhD scholars to display</p>
          </div>
        )}
      </div>
    </Layout>
  );
}