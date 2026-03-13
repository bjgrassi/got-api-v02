import { getCharacter } from '../../services/characters.service';
import RouteButton from '../../ui/route-button';

export default async function Character({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params
  const character = await getCharacter(id)

  return (
    <div>
      <main>
        <RouteButton />
        <div className="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
          <img className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0" src={character.imageUrl} alt={character.fullName} />
          <div className="flex flex-col justify-between md:p-4 leading-normal">
            <h5 className="text-2xl font-bold tracking-tight text-heading">First Name: {character.firstName}</h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">Last Name: {character.lastName}</h5>
            <p className="mb-2 text-body">Title: {character.title}</p>
            <p className="mb-2 text-body">Family: {character.family}</p>
          </div>
        </div>
      </main>
    </div>
  )
}