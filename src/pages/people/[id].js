// src/pages/people/[id].js
import { useRouter } from 'next/router';
import { pi, phdScholars, mastersStudents, interns, past } from '@/content/people';
import Layout from '@/components/layout/Layout';

const allPeople = [
  pi,
  ...phdScholars,
  ...mastersStudents,
  ...interns,
  ...past.phd,
  ...past.masters,
  ...past.interns,
];

export default function PeopleView() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  const person = allPeople.find((p) => p.id === id);

  if (!person) {
    return (
      <Layout>
        <div className="text-center py-20 text-xl">Person not found</div>
      </Layout>
    );
  }

  // Safe access to potentially undefined properties
  const researchInterests = person.researchInterests || [];
  const education = person.education || [];
  const projects = person.projects || [];
  const contact = person.contact || {};
  const social = person.social || {};

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{person.name}</h1>
        {person.photo && (
          <img
            src={person.photo}
            alt={person.name}
            className="w-48 h-48 object-cover rounded-lg mb-6"
          />
        )}
        <p className="text-blue-600 mb-2 font-semibold">{person.position}</p>

        {/* Research Interests */}
        {researchInterests.length > 0 && (
          <div className="mb-4">
            <h2 className="font-semibold mb-1">Research Interests:</h2>
            <p>{researchInterests.join(', ')}</p>
          </div>
        )}

        {/* Department */}
        {person.department && (
          <p className="mb-4 text-gray-700">
            <strong>Department:</strong> {person.department}
          </p>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-4">
            <h2 className="font-semibold mb-1">Education:</h2>
            <ul className="list-disc list-inside text-gray-700">
              {education.map((edu, idx) => (
                <li key={idx}>{edu}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact info */}
        {(contact.email || contact.phone || contact.office || contact.website) && (
          <div className="mb-4">
            <h2 className="font-semibold mb-1">Contact:</h2>
            <ul className="text-gray-700">
              {contact.email && (
                <li>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${contact.email}`} className="text-blue-600 underline">
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.phone && <li><strong>Phone:</strong> {contact.phone}</li>}
              {contact.office && <li><strong>Office:</strong> {contact.office}</li>}
              {contact.website && (
                <li>
                  <strong>Website:</strong>{' '}
                  <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {contact.website}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Bio */}
        {person.bio && <p className="mb-4">{person.bio}</p>}

        {/* Social links */}
        {(social.googleScholar || social.researchGate || social.linkedIn) && (
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Social Profiles:</h2>
            <ul className="flex gap-4">
              {social.googleScholar && (
                <li>
                  <a
                    href={social.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Google Scholar
                  </a>
                </li>
              )}
              {social.researchGate && (
                <li>
                  <a
                    href={social.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    ResearchGate
                  </a>
                </li>
              )}
              {social.linkedIn && (
                <li>
                  <a
                    href={social.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Projects:</h2>
            {projects.map((proj, idx) => (
              <div key={idx} className="mb-3 border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">{proj.title}</h3>
                {proj.funding && <p><strong>Funding:</strong> {proj.funding}</p>}
                {proj.duration && <p><strong>Duration:</strong> {proj.duration}</p>}
                {proj.description && <p>{proj.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Additional fields */}
        {(person.topic || person.previousDegree || person.duration || person.email || person.currentStatus || person.thesisLink) && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h2 className="font-semibold mb-2">Additional Information</h2>
            {person.previousDegree && (
              <p><strong>Previous Degree:</strong> {person.previousDegree}</p>
            )}
            {person.topic && (
              <p><strong>Research Topic:</strong> {person.topic}</p>
            )}
            {person.duration && (
              <p><strong>Duration:</strong> {person.duration}</p>
            )}
            {person.progress && (
              <p><strong>Progress:</strong> {person.progress}</p>
            )}
            {person.email && (
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${person.email}`} className="text-blue-600 underline">
                  {person.email}
                </a>
              </p>
            )}
            {person.currentStatus && (
              <p><strong>Current Status:</strong> {person.currentStatus}</p>
            )}
            {person.thesisLink && (
              <p>
                <strong>Thesis:</strong>{' '}
                <a
                  href={person.thesisLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Download PDF
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}