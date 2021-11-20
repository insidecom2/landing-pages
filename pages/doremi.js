import { Grid } from "@material-ui/core";
import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <title>เรียนดนตรี เชียงใหม่</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item sm={8} justifyContent="center">
          <h2>Doremi Music</h2>
          <p>เรียนดนตรี เชียงใหม่</p>
        </Grid>
      </Grid>
    </div>
  );
}
