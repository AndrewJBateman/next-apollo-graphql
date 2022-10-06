import React from "react";
import { Fruit } from "../generated";
import Head from "next/head";
import Image from "next/image";

const Detail: any = ({ fruit }: any) => {
  return (
    <div>
      <Head>
        <title>Detalles de la Fruta</title>
      </Head>
      <div
        className="max-w-md p-6 mx-auto my-4 bg-white rounded-lg shadow-lg"
        key={fruit.id}
      >
        <div>
          <Image
            className="mx-auto"
            layout="fixed"
            width={400}
            height={300}
            src="https://picsum.photos/400/300"
            alt="random photo"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            {fruit.fruit_name}
          </h2>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Nombre Latino:{" "}
            </span>
            {fruit.scientific_name}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Descripción:{" "}
            </span>
            {fruit.description}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 text-l font-medium text-indigo-700">
              Familia:{" "}
            </span>
            {fruit.family}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 text-l font-medium text-indigo-700">
              Florecimiento:{" "}
            </span>
            {fruit.bloom}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 text-l font-medium text-indigo-700">
              Nombre del Arbol:{" "}
            </span>
            {fruit.tree_name}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Nombre de la Fruta:{" "}
            </span>
            {fruit.fruit_name}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Fruit Maturity:{" "}
            </span>
            {fruit.maturation_fruit}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Ciclo Vital:{" "}
            </span>
            {fruit.life_cycle}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Origen:{" "}
            </span>
            {fruit.origin}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 text-l font-medium text-indigo-700">
              Zona Climática:{" "}
            </span>
            {fruit.climatic_zone}
          </p>
          <p className="mt-2 mr-1 text-l font-medium text-indigo-700">
            Countries:{" "}
            {fruit.producing_countries?.map((cntry: any, index: number) => (
              <span
                key={index}
                className="text-xs inline-block py-1 px-2.5 mx-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded"
              >
                {cntry.country}
              </span>
            ))}
          </p>
        </div>

        <div className="flex space-x-2 justify-center"></div>

        <div className="flex justify-end mt-2">
          <a href={"/"}>
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              volver
            </button>
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
