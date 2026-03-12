const CONTINENTS_API = process.env.BASE_API_URL + "/Continents";
import nextConfig from "@/next.config";


export default async function Home() {
  const CHARACTER_API = `${nextConfig.env?.BASE_API_URL}/Characters`;
  const charactersData = await fetch(CHARACTER_API).then((res) => res.json());
  const firstCharacter = charactersData[0];

  return (
    <div>
      <h1 className="text-5xl font-bold">
        Welcome to Game of Thrones Website!
      </h1>
      <div className="grid grid-cols-3 gap-4 py-10">
        <div key={firstCharacter.id} className="max-w-sm rounded-lg shadow-md bg-white p-6">
          <img className="mx-auto block rounded-full" src={firstCharacter.imageUrl} alt={firstCharacter.fullName} />
          <h5 className="mb-2 text-xl font-semibold text-gray-900">Characters</h5>
          <p className="mb-4 text-gray-600">
            List of Characters and details
          </p>
          <a href="/characters" className="inline-block rounded-md bg-blue-600 py-2 px-4 text-sm text-white hover:bg-blue-700">
            Check out
          </a>
        </div>
      </div>
    </div>
  );
}
