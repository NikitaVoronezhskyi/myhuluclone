const HeaderItem = ({ title, Icon }) => {
  return (
    <li className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100 uppercase">
        {title}
      </p>
    </li>
  );
};

export default HeaderItem;
