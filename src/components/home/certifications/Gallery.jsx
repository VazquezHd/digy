import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const certifications = [{url: belden, alt: "Belden"}, {url: belden, alt: "Belden"}]


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
