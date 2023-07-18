import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cisco from "../../../assets/logos alianzas/cisco.png"
import dell from "../../../assets/logos alianzas/Dell_EMC.png"
import vision from "../../../assets/logos alianzas/hikvision-logo.png"
import huawei from "../../../assets/logos alianzas/huawei.png"
import kiss from "../../../assets/logos alianzas/kisspng.png"
import mikro from "../../../assets/logos alianzas/mikrotik.png"
import optron from "../../../assets/logos alianzas/Logotipo_Optronics_jpg.png"
import pand from "../../../assets/logos alianzas/panduit-indusrial-electrical-infrastructure.png"
import ubiqui from "../../../assets/logos alianzas/Ubiquiti.png"
import belden from "../../../assets/logos alianzas/Belden-Logo.png"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const certifications = [{url: cisco, alt: "cisco"}, {url: dell, alt: "dell"}, {url: vision, alt: "vision"}, {url: huawei, alt: "huawei"}, {url: kiss, alt: "kiss"}, {url: mikro, alt: "mikro"}, {url: optron, alt: "optron"}, {url: pand, alt: "pand"}, {url: ubiqui, alt: "ubiqui"}, {url: belden, alt: "Belden"}]


export const Gallery = () => {
  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
    >
      {certifications.map((certification, index) => (
        <img width="90%" src={certification.url} alt={certifications.alt} key={index}/>
      ))}
    </Carousel>
  );
};
