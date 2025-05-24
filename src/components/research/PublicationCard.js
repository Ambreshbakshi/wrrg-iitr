import Link from 'next/link';

export default function PublicationCard({ publication }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {publication.title}
          </h3>
          <p className="text-gray-600 mt-1">
            {publication.authors.join(', ')}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {publication.journal} • {publication.year}
          </p>
          {publication.doi && (
            <p className="text-sm text-blue-600 mt-2">
              DOI: {publication.doi}
            </p>
          )}
        </div>
        
        <div className="flex space-x-2">
          {publication.pdf && (
            <Link 
              href={publication.pdf}
              target="_blank"
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm hover:bg-blue-100 transition-colors"
            >
              PDF
            </Link>
          )}
          {publication.link && (
            <Link
              href={publication.link}
              target="_blank"
              className="px-3 py-1 bg-gray-50 text-gray-600 rounded-md text-sm hover:bg-gray-100 transition-colors"
            >
              View
            </Link>
          )}
        </div>
      </div>
      
      {publication.abstract && (
        <div className="mt-4">
          <p className="text-sm text-gray-700 line-clamp-3">
            {publication.abstract}
          </p>
        </div>
      )}
    </div>
  );
}