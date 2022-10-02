import { get } from "lodash";

import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { Get_FruitsQuery, useGet_FruitsQuery } from "../generated";
import List from "../components/List";

const Home = () => {
  const { data } = useGet_FruitsQuery();
  const fruits = get(data, "fruits", []);
  return <List fruits={fruits} />;
};

export default withApollo(Home, { getDataFromTree });
