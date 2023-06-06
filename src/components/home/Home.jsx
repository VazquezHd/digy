import { Banner } from "./banners/Banner";
import { Banner2 } from "./banners/Banner2";
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
      <Banner2/>
      <Solutions/>
      <Testimonies/>

    </div>
  );
};
