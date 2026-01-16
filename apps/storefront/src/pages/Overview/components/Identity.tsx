import { 
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import {
  Security as SecurityIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Use `styled` to create a reusable version of `Card` with specific styling
const IdentityCard = styled(Card)({
  backgroundColor: '#ccc',
  padding: '20px',
  borderRadius: '30px',
  textAlign: 'center',
});

export default function Identity() {
  // TODO: Use `useAppSelector` to get state from the `company` slice
  //  - Use destructuring to get `customer` and `companyInfo`
  //  - Use destructuring to get `companyName` from `companyInfo`
  //  - Use destructuring to get `firstName`, `lastName`, and `companyRoleName` from `customer`

  return <>
    <Box
      sx={{
        overflowX: 'auto',
        paddingX: {
          xs: '0',
          lg: '60px',
        },
      }}
    >
      <Grid
        container
        spacing={3}
      >
        {/* Three grid items, with the `lg` value of 4 giving each a one-third width on large screens */}
        <Grid item xs={12} lg={4}>
          <IdentityCard>
            <CardHeader title="User" />
            <CardContent>
              <PersonIcon fontSize="large" color="primary" />
              {/* TODO: Display the `firstName` and `lastName` from the `customer` state */}
              <Typography variant="body1" fontWeight="bold">Name placeholder</Typography>
            </CardContent>
          </IdentityCard>
        </Grid>
        <Grid item xs={12} lg={4}>
          <IdentityCard>
            <CardHeader title="Company" />
            <CardContent>
              <BusinessIcon fontSize="large" color="primary" />
              {/* TODO: Display the `companyName` from the `companyInfo` state */}
              <Typography variant="body1" fontWeight="bold">Company placeholder</Typography>
            </CardContent>
          </IdentityCard>
        </Grid>
        <Grid item xs={12} lg={4}>
          <IdentityCard>
            <CardHeader title="Role" />
            <CardContent>
              <SecurityIcon fontSize="large" color="primary" />
              {/* TODO: Display the `companyRoleName` from the `customer` state */}
              <Typography variant="body1" fontWeight="bold">Role placeholder</Typography>
            </CardContent>
          </IdentityCard>
        </Grid>
      </Grid>
    </Box>
  </>;
}