export default function SectionTitle({ 
  title, 
  subtitle, 
  align = 'left',
  className = '' 
}) {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div className={`${alignment[align]} ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}