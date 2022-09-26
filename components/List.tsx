import Link from "next/link";
import React from "react";
import Image from "next/image";

const List: any = ({characters}) => {
  return (
    <>
      {characters.map((character: any) => (
        <div key={character.id}>
          <Image
            src={character.image}
            alt={character.name}
            width="200px"
            height="200px"
          />
          <Link href="/characters/[id]" as={`/characters/${character.id}`}>
            {character.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default List;
