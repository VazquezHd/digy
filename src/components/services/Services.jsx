import { IntroductionService } from "./Introduction";
import { DescrtiptionService } from "./description";

export function Service({data}) {
  return (
    <div id="service"> 
      <IntroductionService name={data.name} description={data.description}/>
      <DescrtiptionService name={data.name} subtitle={data.subtitle} text={data.text}/>
    </div>
  );
}
