import { get } from "lodash";

import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { useAllFruitsQuery } from "../generated";
import List from "../components/List";

function Home() {
  const { data } = useAllFruitsQuery();
  console.log('predata:', data)
  const fruits = get(data, "fruits", []);
  console.log('data: ', fruits);
  // return fruits;
  return <List fruits={fruits} />;
}

export default withApollo(Home, { getDataFromTree });
