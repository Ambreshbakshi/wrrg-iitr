import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/people';
import { researchAreas } from '@/content/research';
import { awards } from '@/content/awards';
import ResearchAreaCard from '@/components/research/ResearchAreaCard';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { notices } from '@/content/noticedata';
import { upcomingevents } from '@/content/noticedata';

export default function Home() {
  const featuredAwards = awards.faculty.slice(0, 2);
  const featuredResearch = researchAreas.slice(0, 3);

  return (
    <Layout>
      <Head>
        <title>Home | Water Treatment & Management Group</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
             Water Treatment & Management
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
              <div className="relative w-64 h-80 mx-auto overflow-hidden border-4 border-blue-100 shadow-lg">
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

      {/* Notice Board */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
      News & Events
    </h2>

    <div className="flex flex-col md:flex-row gap-10 md:gap-16">
      {/* Notice Board (Left) */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-6 border-b-2 border-blue-600 pb-2">
          Notice Board
        </h3>
        <ul className="space-y-5 max-h-[400px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
          {notices.map((notice) => (
            <li key={notice.id} className="border-l-4 border-blue-600 bg-gray-50 p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <a
                    href={notice.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {notice.title}
                  </a>
                  {notice.isNew && (
                    <span className="ml-3 inline-block px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700 rounded-full select-none">
                      New
                    </span>
                  )}
                </div>
                <time
                  dateTime={notice.date}
                  className="text-sm text-gray-500 italic"
                  title={new Date(notice.date).toLocaleString()}
                >
                  {new Date(notice.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <Button href="/notice" variant="outline" className="px-8 py-3 text-lg">
            View All Notices
          </Button>
        </div>
      </div>

      {/* Upcoming Events (Right) */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-6 border-b-2 border-blue-600 pb-2">
          Upcoming Events
        </h3>
        <ul className="space-y-5 max-h-[400px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
          {upcomingevents.map((event) => (
            <li key={event.id} className="border-l-4 border-green-600 bg-gray-50 p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-800 hover:text-green-600 transition-colors"
                  >
                    {event.title}
                  </a>
                  {event.isNew && (
                    <span className="ml-3 inline-block px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700 rounded-full select-none">
                      New
                    </span>
                  )}
                </div>
                <time
                  dateTime={event.date}
                  className="text-sm text-gray-500 italic"
                  title={new Date(event.date).toLocaleString()}
                >
                  {new Date(event.date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <Button href="/events" variant="outline" className="px-8 py-3 text-lg">
            View All Events
          </Button>
        </div>
      </div>
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