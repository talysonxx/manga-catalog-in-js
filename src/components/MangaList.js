import React from 'react';
import MangaItem from './MangaItem';

const MangaList = ({ mangas }) => {
  return (
    <div className="manga-container">
      {mangas.map((manga) => (
        <MangaItem key={manga.mal_id} manga={manga} />
      ))}
    </div>
  );
};

export default MangaList;
