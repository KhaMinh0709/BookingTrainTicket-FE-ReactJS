export default function NhaGaCard({ name, image, description, onSeeMore }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        {description && (
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        )}
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={onSeeMore}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Xem tiếp...
        </button>
      </div>
    </div>
  );
}
