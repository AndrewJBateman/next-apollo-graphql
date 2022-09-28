import { get } from "lodash";

import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { useAllFruitsQuery } from "../generated";
import List from "../components/List";

const Home = () => {
  const { data } = useAllFruitsQuery();
  const fruits = get(data, "fruits", []);
  console.log("data: ", fruits);
  return <List fruits={fruits} />;
};

export default withApollo(Home, { getDataFromTree });
