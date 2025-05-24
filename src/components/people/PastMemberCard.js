import Image from 'next/image';

export default function PastMemberCard({ member }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={member.photo}
            alt={`Photo of ${member.name}`}
            fill
            className="rounded-full object-cover border-2 border-gray-200"
          />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-600 text-sm">{member.degree} Alumni</p>
          
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            <div>
              <span className="font-medium">Duration:</span>
              <p>{member.duration}</p>
            </div>
            <div>
              <span className="font-medium">Current:</span>
              <p>{member.currentStatus}</p>
            </div>
            <div className="col-span-2">
              <span className="font-medium">Research:</span>
              <p className="text-gray-700">{member.topic}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}