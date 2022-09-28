import React from "react";
import { Fruit, Fruits } from "../generated";
import Head from "next/head";

const List: any = ({ fruits }: any) => {
  return (
    <div>
      <Head>
        <title>Lista de Frutas</title>
      </Head>
      <h1 className="pt-8 pb-4 mx-auto text-2xl font-semibold text-center text-gray-800">
        Lista de Frutas
      </h1>
      {fruits.map((fruit: Fruit) => (
        <div
          className="max-w-md px-8 py-4 mx-auto my-4 bg-white rounded-lg shadow-lg"
          key={fruit.id}
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {fruit.fruit_name}
              <span className="ml-2 text-xl font-medium text-indigo-700">
                ({fruit.scientific_name})
              </span>
            </h2>
            <p className="mt-2 text-gray-600">
              {fruit.description?.substring(0, 60)}
            </p>
          </div>
          <div className="flex justify-end">
            <a
              href={`/fruit/${fruit.id}`}
              className="text-xl font-medium text-indigo-700"
            >
              mas...
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
