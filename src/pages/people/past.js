import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { alumni } from '@/content/people';
import PastMemberCard from '@/components/people/PastMemberCard';
import Tabs from '@/components/people/Tabs';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PastMembersPage() {
  return (
    <Layout>
      <Head>
        <title>Alumni | WRDM Research Group</title>
      </Head>

      <div className="container mx-auto px-4 py-6">
        <Tabs activeTab="past" />
        
        <SectionTitle
          title="Past Members & Alumni"
          subtitle="Former members of our research group"
          className="mb-8"
        />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              PhD Alumni
            </h2>
            <div className="space-y-4">
              {alumni.phd.map(member => (
                <PastMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>

          <section>
  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
    Master&apos;s Alumni
  </h2>
  <div className="grid md:grid-cols-2 gap-4">
    {alumni.masters.map(member => (
      <PastMemberCard key={member.id} member={member} />
    ))}
  </div>
</section>


          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
              Former Interns
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {alumni.interns.map(member => (
                <PastMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
