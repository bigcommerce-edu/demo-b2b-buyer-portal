import { getAPIBaseURL } from '@/shared/service/request/base';

export interface OverviewOrder {
  orderId: string;
  createdAt: number;
  totalIncTax: number;
  poNumber: string;
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
  b2bToken: string,
) => {
  const config = {
    Authorization: `Bearer  ${b2bToken}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const resp = await fetch(`${getAPIBaseURL()}/graphql`, {
    method: 'POST',
    headers: config,
    body: JSON.stringify({
      query: RecentOrdersQuery,
      variables: {
        limit: 5,
        sort: "-createdAt",
      },
    }),
  }).then(res => res.json());

  // Map the edges of `allOrders` in the response to a simple array of orders
  return resp
    .data
    .allOrders?.edges.map((edge) => edge.node) 
    ?? [];
};
