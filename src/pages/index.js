import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/people';
import { researchAreas } from '@/content/research';
import { awards } from '@/content/awards';
import ResearchAreaCard from '@/components/research/ResearchAreaCard';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Home() {
  const featuredAwards = awards.faculty.slice(0, 2);
  const featuredResearch = researchAreas.slice(0, 3);

  return (
    <Layout>
      <Head>
        <title>Home | Water Resources Research Group</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advancing Water Resources Research
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Innovative solutions for sustainable water management at IIT Roorkee
          </p>
          <div className="flex justify-center space-x-4">
            <Button href="/research" variant="secondary" size="large">
              Explore Research
            </Button>
            <Button href="/people" variant="outline" size="large" className="text-white border-white">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* PI Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                <Image
                  src={pi.photo}
                  alt={pi.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {pi.name}
              </h2>
              <p className="text-xl text-blue-600 mb-6">{pi.position}</p>
              <p className="text-gray-700 mb-6">
                {pi.researchInterests.join(' • ')}
              </p>
              <p className="text-gray-600 mb-6">
                {pi.bio.substring(0, 200)}...
              </p>
              <Button href="/people/pi" className="mt-4">
                View Full Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Research Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResearch.map((area) => (
              <ResearchAreaCard key={area.id} area={area} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/research" size="large">
              View All Research Areas
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Awards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Recent Honors & Awards
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredAwards.map((award) => (
              <div key={award.id} className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {award.title}
                </h3>
                <p className="text-gray-600">{award.organization}, {award.year}</p>
                <p className="text-gray-700 mt-2">{award.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/awards" variant="outline">
              View All Awards
            </Button>
          </div>
        </div>
      </section>
      {/* Visit Our Office */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Our Office</h2>
    <p className="text-gray-700 mb-8 max-w-xl mx-auto">
      We welcome collaborators, students, and industry partners to visit our lab at IIT Roorkee.
    </p>
    <div className="flex justify-center">
      <iframe
        title="Lab Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172.17120284773995!2d77.898285!3d29.863601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzQ5LjAiTiA3N8KwNTMnNTMuOCJF!5e0!3m2!1sen!2sin!4v1716537800000!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: '12px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full max-w-4xl mx-auto"
      ></iframe>
    </div>
  </div>
</section>

    </Layout>
  );
}