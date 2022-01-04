import { getSdk, SdkFunctionWrapper } from "./generated/graphql";
import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API)

const authWrapper: SdkFunctionWrapper = async (action, _operationName) => {
  return action({
    Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
  });
}

export default getSdk(client, authWrapper);