import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/people';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

export default function PeopleHome() {
  return (
    <Layout>
      <Head>
        <title>Group Members | Water Resources Research Group</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <SectionTitle 
          title="Research Group Members"
          subtitle="Our team of researchers and students"
          align="center"
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
<div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white border-4 border-blue-100 mx-auto flex items-center justify-center overflow-hidden">
  <div className="relative w-full h-full">
    <Image
      src={pi.photo}
      alt={pi.name}
      fill
      className="object-cover object-top"
    />
  </div>
</div>




              </div>

              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-bold text-gray-800">{pi.name}</h2>
                <p className="text-blue-600 text-lg mb-4">{pi.position}</p>
                <p className="text-gray-700 mb-4">
                  Research Interests: {pi.researchInterests.join(', ')}
                </p>
                <Button href="/people/pi" className="mt-2">
                  View Full Profile
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Button href="/people/phd" variant="outline" className="py-4">
              PhD Scholars
            </Button>
            <Button href="/people/masters" variant="outline" className="py-4">
              Master Students
            </Button>
            <Button href="/people/interns" variant="outline" className="py-4">
              Interns
            </Button>
            <Button href="/people/past" variant="outline" className="py-4">
              Past Members
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
