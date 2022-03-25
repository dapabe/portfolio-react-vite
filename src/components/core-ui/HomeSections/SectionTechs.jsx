import data from "@assets/data.json";
import { useState } from "react";
import { CompareAndRetrieve } from "@utilities/utilities.js";
import Carousel from "../Content/CarouselUI/Carousel";

const TECHS = data.tech_data;
const ICONS = data.icons_data;
const ICONS_DATA = CompareAndRetrieve(TECHS, ICONS, "name", "file");

export default function SectionTechs() {
  const [pause, setPause] = useState(false);
  const handlePause = () => {
    setPause(!pause);
  };
  return (
    <section className="techSection noMaxWidth">
      <h1 className="sm:indent-16 mxsm:text-center">Tecnologias que uso</h1>
      <Carousel initialState={pause} handler={handlePause}>
        {ICONS_DATA.map((icon) => (
          <li key={icon.name}>
            <img
              src={`/icons/logos/${icon.file}`}
              alt={icon.img_desc}
              className="h-20 w-[200px]"
            />
          </li>
        ))}
      </Carousel>
      <h1 className="ml-auto mr-16 text-center sm:max-w-md sm:text-left mxsm:mx-auto mxsm:max-w-xs">
        - Siempre aprendiendo tecnologias solicitadas en el mercado.
      </h1>
    </section>
  );
}
