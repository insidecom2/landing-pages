import { Grid, Container } from "@material-ui/core";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import Link from "next/link";

function Footer({ call, facebook, line }) {
  return (
    <div style={{ paddingTop: "3em;" }}>
      <Container className="footerbar">
        <Grid container spacing={2}>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Link href={call}>
              <PhoneInTalkRoundedIcon
                style={{ fontSize: "3em" }}
                className="pointer"
              />
            </Link>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center", paddingTop: "10px" }}>
            <a target="_blank" href={facebook}>
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://cdn.shopify.com/app-store/listing_images/f83699e125ac913c98279b8d5b392fcd/icon/CMqy2cj0lu8CEAE=.png?height=168&width=168"
                className="pointer"
              />
            </a>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Link href={line}>
              <img
                style={{ width: "40px", height: "40px" }}
                src="https://iconape.com/wp-content/png_logo_vector/line-messenger.png"
                className="pointer"
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
