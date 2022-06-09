import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const HomeContent = () => (
  <>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240
          }}
        >
          <p>Hello</p>
        </Paper>
      </Grid>
    </Grid>
  </>
);

const Home = () => <HomeContent />;

export default Home;
