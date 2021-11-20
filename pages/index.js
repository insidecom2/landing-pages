import { Grid, Container } from "@material-ui/core";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

function Index({ content }) {
  return (
    <div>
      <Head>
        <title>รับทำ Sale Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxWidth="md" alignItems="center" justifyContent="center">
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <h1 style={{ textAlign: "center" }}>
              {ReactHtmlParser(content.title)}
            </h1>
            <p style={{ textAlign: "center" }}>
              รับทำ sale page สำหรับทำโฆษณา Facebook , Google Ads
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  let content = {};
  content.title = `รับทำ Sale Page `;
  content.content = ``;
  return {
    props: {
      content,
    },
  };
}
export default Index;
