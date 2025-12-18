import {
  Card,
} from "@mui/material";

// TODO: Add `OverviewProps` interface
//  - `setOpenPage` should be of the type `SetOpenPage`

// TODO: Update the component signature to accept props and destructure 
export default function Overview() {
  // TODO: Use `HeadlessRoutes` destructuring to get the constants for `ORDERS`, `INVOICE`, and `QUOTES`

  return (
    <>
      <Card sx={{ padding: '20px' }}>
        <h3>Hello World!</h3>

        {/* TODO: Add a simple Box with navigation buttons
              - Use the `Box` and `Button` components from Material UI
              - Use the 'contained' variant for each button
              - Each button should have an `onClick` to use `setOpenPage` with the appropriate route string
        */}
      </Card>
    </>
  );
}
