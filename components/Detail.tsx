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
        className="max-w-md p-4 mx-auto my-4 bg-white rounded-lg shadow-lg"
        key={fruit.id}
      >
        <div>
          <Image
            layout="fixed"
            width={400}
            height={300}
            src="https://picsum.photos/400/300"
            alt="random photo"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            {fruit.fruit_name}
            <span className="ml-2 text-l font-medium text-indigo-700">
              ({fruit.scientific_name})
            </span>
          </h2>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Descripción:
            </span>
            {fruit.description}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Familia:
            </span>
            {fruit.family}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Florecimiento:
            </span>
            {fruit.bloom}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Nombre del Arbol:
            </span>
            {fruit.tree_name}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Nombre de la Fruta:
            </span>
            {fruit.fruit_name}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Fruit Maturity:
            </span>
            {fruit.maturation_fruit}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Ciclo Vital:
            </span>
            {fruit.life_cycle}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Origen:
            </span>
            {fruit.origin}
          </p>
          <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Zona Climática:
            </span>
            {fruit.climatic_zone}
          </p>
          {/* <p className="text-gray-600">
            <span className="mt-2 mr-1 text-l font-medium text-indigo-700">
              Countries:
            </span>
            {fruit.producing_countries[0]?.country}
          </p> */}
        </div>
        <div className="flex justify-end">
          <a href={"/"} className="text-l font-medium text-indigo-700">
            volver a la lista
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
