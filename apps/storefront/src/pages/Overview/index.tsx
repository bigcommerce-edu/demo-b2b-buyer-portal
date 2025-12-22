import {
  Box,
  Button, 
  Card,
} from "@mui/material";
import { type SetOpenPage } from '@/pages/SetOpenPage';
import { HeadlessRoutes } from "@/constants";

interface OverviewProps {
  setOpenPage: SetOpenPage;
}

export default function Overview({
  setOpenPage,
}: OverviewProps) {
  const { ORDERS, QUOTES, SHOPPING_LISTS } = HeadlessRoutes;

  return (
    <>
      <Card sx={{ padding: '20px' }}>
        <h3>Hello World!</h3>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            onClick={() => {
              setOpenPage({
                isOpen: true,
                openUrl: ORDERS,
              });
            }}
            sx={{ margin: '10px' }}
            variant="contained"
          >
            Orders
          </Button>
          <Button
            onClick={() => {
              setOpenPage({
                isOpen: true,
                openUrl: QUOTES,
              });
            }}
            sx={{ margin: '10px' }}
            variant="contained"
          >
            Quotes
          </Button>
          <Button
            onClick={() => {
              setOpenPage({
                isOpen: true,
                openUrl: SHOPPING_LISTS,
              });
            }}
            sx={{ margin: '10px' }}
            variant="contained"
          >
            Shopping Lists
          </Button>
        </Box>
      </Card>
    </>
  );
}
