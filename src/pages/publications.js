// pages/publications.js
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { publications } from '@/content/research';

export default function PublicationsPage() {
  return (
    <Layout>
      <Head>
        <title>Publications | Water Resources Research Group</title>
      </Head>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Publications</h1>
          <p className="text-gray-700 text-lg">
            Explore our peer-reviewed publications in top journals, international conferences, and authored books.
          </p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">

          {/* Journal Articles */}
          {publications.journalArticles?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Journal Articles</h2>
              <ul className="space-y-6 list-disc list-inside">
                {publications.journalArticles.map((pub) => (
                  <li key={pub.id}>
                    <p className="text-gray-900 font-medium">{pub.title}</p>
                    <p className="text-gray-700 text-sm italic">{pub.authors.join(', ')}</p>
                    <p className="text-gray-600 text-sm">
                      {pub.journal}, {pub.year} {pub.volume && `Vol ${pub.volume}`} {pub.pages && `pp. ${pub.pages}`}
                    </p>
                    <div className="flex space-x-4 mt-1 text-sm">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          DOI
                        </a>
                      )}
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          PDF
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Conference Papers */}
          {publications.conferences?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conference Papers</h2>
              <ul className="space-y-6 list-disc list-inside">
                {publications.conferences.map((pub) => (
                  <li key={pub.id}>
                    <p className="text-gray-900 font-medium">{pub.title}</p>
                    <p className="text-gray-700 text-sm italic">{pub.authors.join(', ')}</p>
                    <p className="text-gray-600 text-sm">
                      {pub.conference} {pub.year && `(${pub.year})`}
                    </p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Link
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Books */}
          {publications.books?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Books</h2>
              <ul className="space-y-6 list-disc list-inside">
                {publications.books.map((pub) => (
                  <li key={pub.id}>
                    <p className="text-gray-900 font-medium">{pub.title}</p>
                    <p className="text-gray-700 text-sm italic">{pub.authors.join(', ')}</p>
                    <p className="text-gray-600 text-sm">{pub.publisher} ({pub.year})</p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        View Book
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
