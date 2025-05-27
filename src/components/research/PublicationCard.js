import Link from 'next/link';

export default function PublicationCard({ publication }) {
  const {
    title,
    authors = [],
    journal,
    conference,
    year,
    volume,
    pages,
    publisher,
    location,
    doi,
    pdf,
    link,
    abstract
  } = publication;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>

          {authors.length > 0 && (
            <p className="text-gray-600 mt-1">
              {authors.join(', ')}
            </p>
          )}

          <p className="text-sm text-gray-500 mt-2 space-y-1">
            {journal && <span>{journal}</span>}
            {conference && <span>{conference}</span>}
            {year && <span> • {year}</span>}
          </p>

          {volume && (
            <p className="text-sm text-gray-500">Volume: {volume}</p>
          )}
          {pages && (
            <p className="text-sm text-gray-500">Pages: {pages}</p>
          )}
          {publisher && (
            <p className="text-sm text-gray-500">Publisher: {publisher}</p>
          )}
          {location && (
            <p className="text-sm text-gray-500">Location: {location}</p>
          )}

          {doi && (
            <p className="text-sm text-blue-600 mt-2">DOI: {doi}</p>
          )}
        </div>

        <div className="flex space-x-2">
          {pdf && (
            <Link
              href={pdf}
              target="_blank"
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm hover:bg-blue-100 transition-colors"
            >
              PDF
            </Link>
          )}
          {link && (
            <Link
              href={link}
              target="_blank"
              className="px-3 py-1 bg-gray-50 text-gray-600 rounded-md text-sm hover:bg-gray-100 transition-colors"
            >
              View
            </Link>
          )}
        </div>
      </div>

      {abstract && (
        <div className="mt-4">
          <p className="text-sm text-gray-700 line-clamp-3">{abstract}</p>
        </div>
      )}
    </div>
  );
}
