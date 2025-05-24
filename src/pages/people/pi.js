import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/people';
import PersonDetails from '@/components/people/PersonDetails';
import Button from '@/components/ui/Button';

export default function PIPage() {
  return (
    <Layout>
      <Head>
        <title>{pi.name} | IIT Roorkee</title>
        <meta name="description" content={`Profile of ${pi.name}, ${pi.position} at IIT Roorkee`} />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <PersonDetails person={pi} />
        
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Research Projects</h2>
          <div className="space-y-4">
            {pi.projects?.map((project, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.funding} ({project.duration})</p>
                <p className="text-gray-700 mt-1">{project.description}</p>
              </div>
            )) || (
              <p>Projects information coming soon...</p>
            )}
          </div>
        </div>

        <div className="mt-8 flex space-x-4">
          <Button href={pi.social.googleScholar} target="_blank" variant="outline">
            Google Scholar
          </Button>
          <Button href={pi.social.researchGate} target="_blank" variant="outline">
            ResearchGate
          </Button>
        </div>
      </div>
    </Layout>
  );
}