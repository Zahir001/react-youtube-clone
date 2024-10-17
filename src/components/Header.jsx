import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
    return (
        <div className="flex justify-between items-center p-4 ">
            <div className="flex items-center">
                <img
                onClick={toggleMenuHandler}
                    className="h-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTT06AC7P4GL1Opud3MYOVDS_BoijVKhxoQ&s"
                    alt=""
                />
                <img
                    className="h-12"
                    src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                    alt=""
                />
            </div>
            <div className="flex yt-searchContainer">
                <div className="flex flex-1">
                    <form action="" className="flex-1">
                        <input className="ytd-searchBox" type="text" placeholder="Search"/>
                    </form>
                    <button className="ytd-SearchBtn">
                            <CiSearch className="yt-searchicon"/>
                    </button>
                </div>
            </div>
            <div>
                <img
                    className="h-8"
                    src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Header;
