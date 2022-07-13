import Image from "next/image";
import HeaderItem from "./HeaderItem/HeaderItem";

const Header = () => {
  return (
    <header className="">
      <nav>
        <ul>
            <HeaderItem title="" Icon="" />
        </ul>
      </nav>
      <Image
        src={"/../public/hulu-white.webp"}
        className="object-contain"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
