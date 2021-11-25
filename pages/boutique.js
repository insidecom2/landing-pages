import { Grid, Container } from "@material-ui/core";
import Footer from "components/footer";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import Slide from "../src/components/Slide";
import Image from "next/image";
import FacebookPixel from "../src/components/pixel-boutique.js";

function Index({ content }) {
  let images = [];
  for (let loop = 1; loop < 40; loop++) {
    images.push(`/images/boutique/${loop}.jpg`);
  }

  return (
    <div>
      <Head>
        <title>Boutique@Taiwang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="วิลล่าทั้งหลังและห้องพัก มีระดับ ตกแต่งสไตล์ล้านนาวินเทจ
              เเถมถ่ายรูปสวย ราคาโดนเเละดีต่อใจ พร้อมสิ่งอำนวยความสะดวกครบครัน
              บนถนนท้ายวัง ช้างม่อย ใจกลางเมืองเชียงใหม่."
        />
        <FacebookPixel />
      </Head>
      <Container maxWidth="md" className="container-main">
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <h2 style={{ textAlign: "center" }}>
              {ReactHtmlParser(content.title)}
            </h2>
            <p>
              <Image
                src="/images/boutique/1.jpg"
                width={1000}
                height={600}
                layout="responsive"
                alt="Slide"
              />
            </p>
            {ReactHtmlParser(content.content)}
            <Slide images={images}></Slide>
          </Grid>
        </Grid>
      </Container>
      <Footer
        call="tel:081-8741173"
        line="https://line.me/ti/p/~Boutiquetaiwang"
        facebook="https://www.messenger.com/t/102180811340597/"
      ></Footer>
    </div>
  );
}

export async function getServerSideProps() {
  let content = {};
  content.title = `Boutique@Taiwang`;
  content.content = `<p>✈️🛩🛫 ไปเที่ยวด้วยกันที่เชียงใหม่ กับ Boutique@taiwang กันไหม</p>
            <p>
              🧳⌚️จองก่อนเลือกวันเช็คอินได้ก่อนใคร. ในกรณีที่จองแล้ว
              ทางลูกค้าไม่สามารถเข้าพักได้เลื่อนได้ไม่จำกัดครั้งและไม่มีค่าใช้จ่ายใดๆๆทั้งสิ้น😊😊🥳
            </p>
            <p>
              🏠🏕วิลล่าทั้งหลังและห้องพัก มีระดับ ตกแต่งสไตล์ล้านนาวินเทจ
              เเถมถ่ายรูปสวย ราคาโดนเเละดีต่อใจ พร้อมสิ่งอำนวยความสะดวกครบครัน
              บนถนนท้ายวัง ช้างม่อย ใจกลางเมืองเชียงใหม่ ใกล้แหล่งช้อปปิ้ง เเละ
              เเหล่งซื้อของฝาก และสถานที่ท่องเที่ยวสำคัญ ประตูท่าเเพร
              วัดพระสิงห์
            </p>
            <p>
              🏠 🖼มีสนาม และพื้นที่กว้างขวาง ภายในบ้านมีLobby พร้อม Free high
              speed Wifi, Internet TV65นิ้ว , Mini Kitchen -
              สามารถทำกิจกรรมร่วมกัน ภายในวิลล่าได้ มีแม่บ้านคอยอำนวยความสะดวก
              และดูแลความสะอาด ตลอดระยะเวลาการเข้าพัก มีที่จอดรถยนต์ กว้างขวาง
              ภายในบริเวณวิลล่า สามารถนำสัตว์เลี้ยงตัวโปรดเข้าพักได้ 🏠
              ตั้งอยู่ริมถนนใหญ่ อยู่ด้านหลัง สถานฑูตอมริกา แม่น้ำปิง
              ใจกลางเมืองเชียงใหม่ ทำเลดีมาก
            </p>
            <p>
              🚎🚲ไม่มีรถยนต์ส่วนตัวก็สามารถเดินทางได้สะดวกสบาย
              เพราะมีรถสาธารณะวิ่งตลอด
            </p>
            <p>
              🚶🏃🍜เดินแค่เอื้อมไปยังตลาดวโรรสและตลาดเมืองใหม่ดอกไม้
              และถนนคนเดินตลาดกลางคืนต้นลำใย ห่างจากสนามบินเเค่ 10 นาที
              และประตูท่าเเพร เดินไม่ถึง 10 นาที
            </p>
            <p>
              🍱🍔🍹🍾🎼🎺มีร้านอาหาร สวยๆมากมาย พร้อมดนตรีไพเราะ ริมน้ำปิง
              ห่างจากวิลล่าแค่ ข้ามสะพานนครพิงษ์ เเละ มี Tesco lotus Go Fresh 24
              ชั่วโมง และร้านอาหาร ข้าวต้ม รอบดึก อยู่ข้างวิลล่า
              อาหารการกินสะดวกมาก. สนใจทักมาได้เลยจร้า . ช่วงนี้ รัฐ จัดโครงการ
              เรา เที่ยวด้วยกันเพส 3 ลูกค้า สามารถใช้ สิทธ ได้เลย คร้า
            </p>
            <p>
              💷💷ราคาขึ้นอยุ่กับจำนวนคนและวันเข้าพักจร้า เริ่มต้น เเค่ 200 ++
              ต่อท่าน/ คืน รองรับได้ตั้งเเต่ 2 ท่านไปถึง 20 ท่านเลยจร้า
              สนใจติดต่อ : ☎️081-8741173 Line ID : Boutiquetaiwang
            </p>`;
  return {
    props: {
      content,
    },
  };
}
export default Index;
