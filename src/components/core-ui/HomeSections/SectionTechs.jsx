import { CompareAndRetrieve } from "@src/utilities.js";
import { Carousel } from "@ui/common/exports";
import data from "@src/assets/data.json";

const TECHS = Object.freeze(data.tech_data);
const ICONS = Object.freeze(data.icons_data);
const ICONS_DATA = CompareAndRetrieve({
  arrToLook: TECHS,
  arrToSearch: ICONS,
  keyToSearch: "name",
  keyToReturn: "file",
});

export default function SectionTechs() {
  return (
    <section className="techSection noMaxWidth">
      <h1 className="sectionTitle sm:indent-[5rem] mxsm:text-center">
        Tecnologias
      </h1>
      <Carousel>
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
