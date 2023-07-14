import { Banner } from "./banners/Banner";
import { Banner2 } from "./banners/Banner2";
import { Certifications } from "./certifications/Certifications";
import { Experience } from "./experience/Experience";
import { Services } from "./services/Services";
import { Solutions } from "./solutions/Solutions";
import { Testimonies } from "./testimonies/Testimonies";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Experience/>
      <Solutions/>
      <Testimonies/>
      <Certifications/>

    </div>
  );
};
