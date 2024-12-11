import {Meteors} from "../magic-ui/components/ui/meteors.jsx";
import BusinessCard from "./Vcard.jsx";
 
export function MeteorDemo() {
  return (
    <div  style={{
        backgroundImage:
          "url('https://www.ul.com/sites/default/files/styles/hero_boxed_width/public/2020-06/GettyImages-692023989.jpg?itok=ezibfSE6')",
      }} className="w-[90%] sm:w-[500px] max-w-[500px] bg-cover bg-center  h-fit rounded-3xl shadow-lg overflow-hidden bg-black relative">
        <div className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-black/25 z-10"></div>
      
      <Meteors number={100} />

      <BusinessCard/>
    </div>
  );
}