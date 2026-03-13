'use client';

import { Suspense, useState } from 'react';
import Card from '../ui/card';
import Pagination from '../ui/pagination';

export default function CharactersList({ characters }: { characters: any[] }) {
    const PAGE_SIZE = 10;
    const [page, setPage] = useState(1);
    const start = (page - 1) * PAGE_SIZE;
    const [slicedCharacters, setSlicedCharacters] = useState(characters.slice(start, start + PAGE_SIZE));

    const handlePageChange = (newCurrentPage: number) => {
        setPage(newCurrentPage);
        setSlicedCharacters(characters.slice((newCurrentPage - 1) * PAGE_SIZE, newCurrentPage * PAGE_SIZE));
    }

  return (
    <div>
      <h1 className="text-5xl font-bold">
        Characters
      </h1>
      <Suspense fallback={'loading...'}>
        <div className="grid grid-cols-3 gap-4 py-10">
          {slicedCharacters.map((character: any) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
        <Pagination 
            pageSize={PAGE_SIZE}
            currentPage={page}
            totalItems={characters.length}
            onPageChange={handlePageChange} />
      </Suspense>
    </div>
  );
}
