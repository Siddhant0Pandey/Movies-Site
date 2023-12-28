// import logo from "../assets/Images/logo.png";
import avatar from "../assets/Images/avatar.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "ORIGINALS", icon: HiStar },
    { name: "SERIES", icon: HiPlayCircle },
    { name: "MOVIES", icon: HiTv },
  ];
  return (
    <div className="flex items-center justify-between py-2 px-3 h-[5rem]">
      <h1 className="text-textColor  text-lg pb-2 lg:ml-[3.5rem] ml-6">
        MarTheo Movies
      </h1>
      <div className="flex items-center gap-8 ">
        {/* <img src={logo} className="w-[80px] md:w-[115px] object-cover" /> */}
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-6">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={index} name={item.name} Icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-4 p-2 bg-primary4 border-[1px] border-primary3 ">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={avatar} className="w-[40px] rounded-full lg:mr-[3.5rem] mr-6" />
    </div>
  );
}

export default Header;
