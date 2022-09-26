import { get } from "lodash";

import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { useCharactersQuery } from "../generated";
import List from "../components/List";

function Home() {
  const { data } = useCharactersQuery();
  const characters = get(data, "characters.results", []);

  return <List characters={characters} />;
}

export default withApollo(Home, { getDataFromTree });
