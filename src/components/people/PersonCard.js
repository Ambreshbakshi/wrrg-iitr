import Image from 'next/image';
import Link from 'next/link';

export default function PersonCard({ person }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <Image
          src={person.photo}
          alt={`Photo of ${person.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{person.position}</p>
        
        <div className="mt-3 space-y-2">
          <div>
            <span className="font-medium">Education:</span>
            <p className="text-sm text-gray-700">{person.previousDegree}</p>
          </div>
          
          <div>
            <span className="font-medium">Research:</span>
            <p className="text-sm text-gray-700">{person.topic}</p>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">
            <span className="font-medium">Duration:</span> {person.duration}
          </p>
        </div>

        <Link 
          href={`/people/${person.id}`}
          className="mt-4 inline-block text-sm text-blue-600 hover:underline"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
}