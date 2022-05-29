import Image from "next/image";
import data from "@src/assets/data.json";

const social_icons = data.social_data;

export default function SocialLinks({ ...props }) {
  return social_icons.map(({ name, url, img, img_desc, fallback_img }) => (
    <i className="social-icon" key={name}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={img_desc}
        {...props}
      >
        <Image
          src={`/icons/social/${img || fallback_img}`}
          alt={img_desc}
          width={32}
          height={32}
        />
      </a>
    </i>
  ));
}
