'use client'

export default function Card({ 
    character
}: { 
    character: any; 
}) {
  return (
    <div key={character.id} className="max-w-sm rounded-lg shadow-md bg-white p-6">
        <img className="mx-auto block rounded-full" src={character.imageUrl} alt={`This character calls ${character.fullName}`} />
        <h5 className="mb-2 text-xl font-semibold text-gray-900">{character.fullName}</h5>
        <p className="mb-4 text-gray-600">
            Member of {character.family} and holds the title of {character.title}.
        </p>
        <a role="button" href={`/characters/${character.id}`} className="inline-block rounded-md bg-blue-600 py-2 px-4 text-sm text-white hover:bg-blue-700">
            Read more
        </a>
    </div>
  );
}