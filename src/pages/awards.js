import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { awards } from '@/content/awards';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Awards() {
  return (
    <Layout>
      <Head>
        <title>Awards & Honors | Water Resources Group</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <SectionTitle 
          title="Awards & Honors" 
          subtitle="Recognitions for our research contributions"
          align="center"
        />

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            Faculty Awards
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.faculty.map((award) => (
              <div key={award.id} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-600">
                  {award.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {award.organization} • {award.year}
                </p>
                <p className="text-gray-700 mt-3">{award.description}</p>
                {award.link && (
                  <a 
                    href={award.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-600 hover:underline text-sm"
                  >
                    More details
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
            Student Achievements
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Award</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {awards.students.map((award) => (
                  <tr key={award.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {award.recipient}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {award.title}
                      {award.paperTitle && (
                        <p className="text-xs text-gray-500 mt-1">
                          {award.paperTitle}
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {award.year}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}