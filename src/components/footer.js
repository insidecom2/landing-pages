import { Grid, Container } from "@material-ui/core";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import Link from "next/link";
import Image from "next/image";

function Footer({ call, facebook, line }) {
  return (
    <div style={{ paddingTop: "3em;" }}>
      <Container maxWidth="xxl" className="footerbar">
        <Grid container spacing={2}>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <a href={call}>
              <PhoneInTalkRoundedIcon
                style={{ fontSize: "3em" }}
                className="pointer"
              />
            </a>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center", paddingTop: "10px" }}>
            <a target="_blank" rel="noreferrer" href={facebook}>
              <Image
                width={40}
                height={40}
                className="pointer"
                src="/images/facebook-chat.webp"
              />
            </a>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <a href={line}>
              <Image
                width={40}
                height={40}
                src="/images/line-messenger.png"
                className="pointer"
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
