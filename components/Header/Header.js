import Image from "next/image";
import HeaderItem from "./HeaderItem/HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-3">
        <ul className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="Home" Icon={HomeIcon} />
            <HeaderItem title="Trending" Icon={LightningBoltIcon} />
            <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
            <HeaderItem title="Collection" Icon={CollectionIcon} />
            <HeaderItem title="Search" Icon={SearchIcon} />
            <HeaderItem title="Account" Icon={UserIcon} />
        </ul>
      <Image
        alt="Hulu"
        src={"/../public/hulu-white.webp"}
        className="object-contain"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
