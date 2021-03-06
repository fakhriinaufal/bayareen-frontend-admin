export default function ButtonImg({ text, icon, alt, className, onClick, imgClassName }) {
  return (
    <button
      className={`inline-flex items-center justify-center w-full px-4 py-3 bg-dark-green hover:bg-dark-green-hover text-light-gray text-lg transition-colors rounded-md shadow-lg ${className}`}
      onClick={onClick}
    >
      <img src={icon} alt={alt} className={`mr-2 ${imgClassName}`} />
      {text}
    </button>
  );
}
