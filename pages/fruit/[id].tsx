import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../lib/withApollo";
import { useGet_FruitQuery } from "../../generated";

function SingleFruitPage({ query }: any): any {
  const id = get(query, "id");

  const { data } = useGet_FruitQuery({
    variables: {
      id,
    },
  });

  return <div>{JSON.stringify(data)}</div>;
}

export default withApollo(SingleFruitPage, { getDataFromTree });
