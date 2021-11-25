import { Grid, Container } from "@material-ui/core";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";
import Footer from "components/footer";

function Index({ content }) {
  return (
    <div>
      <Head>
        <title>เรียนดนตรี เชียงใหม่</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="รับสอนดนตรี เปียโน ไวโอลิน ร้องเพลง เต้น กีตาร์ อคูเลเล่ เรียนแบบ ส่วนตัว "
        />
      </Head>
      <Container maxWidth="md" className="container-main">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div style={{ textAlign: "center" }}>
              <Image
                src="/images/doremi/logo3.png"
                width={120}
                height={120}
                alt="Slide"
              />
            </div>
            <h2 style={{ textAlign: "center" }}>
              {ReactHtmlParser(content.title)}
            </h2>
            <p style={{ textAlign: "center" }}>
              {ReactHtmlParser(content.subcontent)}
            </p>
            <Image
              src="/images/doremi/music.png"
              width={1000}
              height={640}
              layout="responsive"
              alt="Slide"
            />
            <p>{ReactHtmlParser(content.des)}</p>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/doremi/piano-1.jpg"
              width={1000}
              height={400}
              layout="responsive"
              alt="Slide"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/doremi/violin.jpg"
              width={1000}
              height={400}
              layout="responsive"
              alt="Slide"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/doremi/VOice-1.jpg"
              width={1000}
              height={400}
              layout="responsive"
              alt="Slide"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/doremi/Guitar.jpg"
              width={1000}
              height={400}
              layout="responsive"
              alt="Slide"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/doremi/Dance.jpg"
              width={1000}
              height={400}
              layout="responsive"
              alt="Slide"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/doremi/art.jpg"
              width={1000}
              height={400}
              layout="responsive"
              alt="Slide"
            />
          </Grid>
        </Grid>
      </Container>
      <Footer
        call="tel:0876616864"
        line="https://line.me/ti/p/~0876616864"
        facebook="https://www.messenger.com/t/102180811340597/"
      ></Footer>
    </div>
  );
}

export async function getServerSideProps() {
  let content = {};
  content.title = `Doremi Music`;
  content.subcontent = `โดเรมี มิวสิค เรียนดนตรี สอนดนตรี เชียงใหม่`;
  content.des = `โดเรมีมิวสิค เราเป็นโรงเรียนดนตรี ในเชียงใหม่ เน้นการเรียนดนตรี การสอนดนตรี โดยประกอบด้วยหลักสูตรได้มาตราฐาน
รับสมัครตั้งแต่อายุ 4 ปีขึ้นไป การสอนเราเน้นการเรียนแบบตัวต่อตัว เพื่อให้ผู้เรียนได้รับประโยชน์ในการเรียนมากที่สุด
เราเน้นทั้งทฤษฎีและการปฎิบัติควบคู่กันพร้อมสอดแทรกกิจกรรมให้ผู้เรียนสนุกกับการเรียนไปในตัว
หลักสูตรเน้นดนตรีด้านคลาสิคเป็นหลักหรือสอดแทรกเพลงที่ผู้เรียนชื่นชอบได้เช่นกัน
สนใจข้อมูลเพิ่มเติม หรือ จองเวลาเรียน`;
  return {
    props: {
      content,
    },
  };
}
export default Index;
