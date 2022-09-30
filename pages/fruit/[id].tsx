import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../lib/withApollo";
import { useGet_FruitQuery } from "../../generated";
import Detail from "../../components/Detail";

function SingleFruitPage({ query }: any): any {
  const id = get(query, "id");

  const { data } = useGet_FruitQuery({
    variables: {
      id,
    },
  });
  const fruit = get(data, "fruit", [])
  console.log("data: ", fruit);

  return <Detail fruit={fruit} />;
}

export default withApollo(SingleFruitPage, { getDataFromTree });
