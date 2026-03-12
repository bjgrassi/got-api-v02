import { getCharacter } from '../../services/characters.service';

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
        <img className="mx-auto block rounded-full" src={character.imageUrl} alt={character.fullName} />
        <h1>Hi {character.fullName}</h1>
      </main>
    </div>
  )
}