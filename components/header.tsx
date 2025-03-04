import Image from "next/image";
import me from "../public/dwight-watson.jpg";
import HeaderLink from "@/components/header-link";
import Links from "@/components/links";

const Header = () => {
  return (
    <>
      <div className="flex items-center lg:flex-col lg:items-start gap-4 mb-4">
        <Image
          src={me}
          alt="Picture of Dwight Watson"
          className="inline-block shrink-0 rounded-full overflow-hidden size-20"
        />

        <div>
          <HeaderLink />
          <p>A blog about Laravel & Rails.</p>
        </div>
      </div>

      <Links className="hidden lg:block" />
    </>
  );
};

export default Header;
