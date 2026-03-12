import { getCharacters } from '../services/characters.service';

// Turn the component into an async function to fetch data from the API
export default async function Characters() {
  const charactersData = await getCharacters();

  return (
    <div>
      <h1 className="text-5xl font-bold">
        Characters
      </h1>
      <div className="grid grid-cols-3 gap-4 py-10">
        {charactersData.map((character: any) => (
          <div key={character.id} className="max-w-sm rounded-lg shadow-md bg-white p-6">
            <img className="mx-auto block rounded-full" src={character.imageUrl} alt={character.fullName} />
            <h5 className="mb-2 text-xl font-semibold text-gray-900">{character.fullName}</h5>
            <p className="mb-4 text-gray-600">
              Member of {character.family} and holds the title of {character.title}.
            </p>
            <a href={`/characters/${character.id}`} className="inline-block rounded-md bg-blue-600 py-2 px-4 text-sm text-white hover:bg-blue-700">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
