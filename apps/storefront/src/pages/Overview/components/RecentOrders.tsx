import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
} from "@mui/material";

import { B3Table } from "@/components/table/B3Table";
import B3Spin from "@/components/spin/B3Spin";
import { type SetOpenPage } from '@/pages/SetOpenPage';
import { displayFormat } from "@/utils/b3DateFormat";
import { currencyFormat } from "@/utils/b3CurrencyFormat";

import { getRecentOrders, OverviewOrder } from "../data";

interface OrdersProps {
  setOpenPage: SetOpenPage;
}

export default function RecentOrders({
  setOpenPage,
}: OrdersProps) {
  // Establish state for orders and loading
  const [orders, setOrders] = useState<OverviewOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When the component mounts, fetch the recent orders and store in state
    getRecentOrders().then((b2bOrders) => {
      setOrders(b2bOrders);
      setLoading(false);
    });
  }, []);

  // Columns configuration for `B3Table`, with keys matching fields in orders response
  const orderColumns = [
    {
      key: 'orderId',
      title: 'Order',
    },
    {
      key: 'poNumber',
      title: 'PO Number',
    },
    {
      key: 'totalIncTax',
      title: 'Grand Total',
      render: (item: OverviewOrder) => {
        return currencyFormat(item.totalIncTax);
      },
    },
    {
      key: 'createdAt',
      title: 'Created On',
      render: (item: OverviewOrder) => {
        return `${displayFormat(Number(item.createdAt))}`;
      },
    },
  ];

  return (
    // Render a "spinner" wrapper, with the loading state controlling the spinner
    <B3Spin isSpinning={loading}>
      <Card sx={{ boxShadow: 'none' }}>
        <CardContent>
          {/* Render a table, with `orderColumns` defining the behavior of each column and `orders` providing the data records */}   
          <B3Table
            tableFixed={true}
            columnItems={orderColumns}
            listItems={orders}
            tableKey="orderId"
            showPagination={false}
            onClickRow={(item) => {
              // When any item in the table is clicked, open the Buyer Portal order page for the order
              setOpenPage({ isOpen: true, openUrl: `/orderDetail/${item.orderId}` });
            }}
          />
        </CardContent>
      </Card>
    </B3Spin>
  );
}
