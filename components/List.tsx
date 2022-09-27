import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Fruit, Fruits } from "../generated";

const List: any = ({fruits}: any) => {
  return (
    <>
      {fruits.map((fruit: Fruit) => (
        <div key={fruit.id}>
          {/* <Image
            src={fruit.}
            alt={fruit.name}
            width="200px"
            height="200px"
          /> */}
          <Link href="/fruits/[id]" as={`/fruits/${fruit.id}`}>
            {fruit.fruit_name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default List;
