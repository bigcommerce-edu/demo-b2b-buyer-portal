import B3Request from "@/shared/service/request/b3Fetch";

export interface OverviewOrder {
  orderId: string;
  createdAt: number;
  totalIncTax: number;
  poNumber: string;
}

interface RecentOrdersResponse {
  allOrders: {
    edges: {
      node: OverviewOrder;
    }[]
  }
}

// GraphQL query to get recent orders
const RecentOrdersQuery = `
  query GetRecentOrders(
    $limit: Int,
    $sort: String
  ) {
    allOrders(
      first: $limit,
      orderBy: $sort
    ){
      edges {
        node {
          orderId
          createdAt
          totalIncTax
          poNumber
        }
      }
    }
  }
`;

export const getRecentOrders = async (
) => {
  // Use `B3Request` to make a GraphQL request, which automatically uses the token stored in the Redux store
  //  - Pass in the GraphQL query string
  //  - The expected response is of type `RecentOrdersResponse`
  const resp = await B3Request.graphqlB2B({
    query: RecentOrdersQuery,
    variables: {
      limit: 5,
      sort: "-createdAt",
    },
  }) as RecentOrdersResponse;

  // Map the edges of `allOrders` in the response to a simple array of orders
  return resp
    .allOrders?.edges.map((edge) => edge.node) 
    ?? [];
};
