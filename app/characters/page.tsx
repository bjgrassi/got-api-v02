import { getCharacters, getSlicedCharacters } from '../services/characters.service';
import CharactersList from './characters-list';

// Turn the component into an async function to fetch data from the API
export default async function CharactersPage() {
  const charactersData = await getCharacters();
  return <CharactersList characters={charactersData} />;
}