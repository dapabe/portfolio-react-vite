import data from "@src/assets/data.json";
const social = data.social_data;
export default function Footer() {
  return (
    <footer className="bg-sutilBlack pb-10">
      <ul className="my-container mx-auto flex flex-col justify-between gap-y-5 pt-6 text-center sm:flex-row">
        {social.map(({ name, url }) => (
          <li key={name} className="btn-inOut text-white after:bg-white">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
