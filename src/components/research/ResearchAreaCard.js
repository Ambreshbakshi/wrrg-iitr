import Link from 'next/link';

export default function ResearchAreaCard({ area }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-500">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-blue-50 text-blue-600">
            {area.icon}
          </div>
          <h3 className="text-xl font-semibold ml-4">{area.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{area.description}</p>
        
        {area.projects && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-500 mb-2">ONGOING PROJECTS</h4>
            <ul className="space-y-1">
              {area.projects.map((project, index) => (
                <li key={index} className="text-sm text-gray-700">
                  • {project}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <Link
          href={`/research/${area.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}