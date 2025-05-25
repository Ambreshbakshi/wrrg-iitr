export default function Tabs({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="flex justify-center border-b border-gray-300 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 mx-2 font-medium transition-colors duration-200 border-b-2 
            ${
              activeTab === tab.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-blue-500'
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
