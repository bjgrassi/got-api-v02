import nextConfig from "@/next.config";

const CHARACTER_API = `${nextConfig.env?.BASE_API_URL}/Characters`;

interface Character {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    family: string;
    image: string;
    imageUrl: string;
}

export async function getCharacters(): Promise<Character[]> {
    const response = await fetch(CHARACTER_API)

    if (!response.ok) {
        throw new Error('Failed to fetch characters');
    }
    
    const data = await response.json();
    return data;
}

export function getSlicedCharacters(characters: Character[], page: number, itemsPerPage: number): Character[] {
    const initialIndex = (page - 1) * itemsPerPage;
    const finalIndex = page * itemsPerPage;
    return characters.slice(initialIndex, finalIndex);
}

export async function getCharacter(id: string): Promise<Character> {
    const response = await fetch(`${CHARACTER_API}/${id}`)

    if (!response.ok) {
        throw new Error('Failed to fetch character');
    }
    
    const data = await response.json();
    return data;
}