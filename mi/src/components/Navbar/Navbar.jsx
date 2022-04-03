import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const Xiaomi = [
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/12prohei.png?width=140&height=140",
      Title: "Xiaomi 12 Pro",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/12hei800.png?width=140&height=140",
      Title: "Xiaomi 12",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/k3s800black.png?width=140&height=140",
      Title: "Xiaomi 11T Pro",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/k11r800black.png?width=140&height=140",
      Title: "Xiaomi 11T",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/k9d800blue.png?width=140&height=140",
      Title: "Xiaomi 11 Lite 5G NE",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/Iris/more.jpg?width=140&height=140",
      Title: "More",
    },
  ];
  const Redmi = [
    {
      img: "https://i01.appmifile.com/webfile/globalimg/0320/TO-B/800/redmi-note-11pro-plus-5g.png?width=140&height=140",
      Title: "Redmi Note 11 Pro+ 5G",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/0320/TO-B/800/redmi-note-11s-5g.png?width=140&height=140",
      Title: "Redmi Note 11S 5G",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/0320/TO-B/800/Redmi-10c-green-800.png?width=140&height=140",
      Title: "Redmi 10C",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/k6sblack.png?width=140&height=140",
      Title: "Redmi Note 11 Pro 5G",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/k7tblue.png?width=140&height=140",
      Title: "Redmi Note 11",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/Iris/more.jpg?width=140&height=140",
      Title: "More",
    },
  ];
  const Audio = [
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/buds3tpro.png?width=140&height=140",
      Title: "Xiaomi Buds 3T Pro",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/buds3.png?width=140&height=140",
      Title: "Xiamoi Buds 3",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/rmb3p.png?width=140&height=140",
      Title: "Redmi Buds 3 Pro",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/redmi_buds_3.png?width=140&height=140",
      Title: "Redmi Buds 3",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/Wireless-Earbuds-Basic-2S.png?width=140&height=140",
      Title: "Mi True Wireless Earbuds Basic 2S",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/Iris/more.jpg?width=140&height=140",
      Title: "More",
    },
  ];
  const Mi_TV = [
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/tvp1e55.png?width=140&height=140",
      Title: "Xiaomi TV P1E 55inch",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/tvp1e43.png?width=140&height=140",
      Title: "Xiaomi TV P1E 43inch",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/tvq1e55.png?width=140&height=140",
      Title: "Xiaomi TV Q1E 55inch",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/p1tv55.png?width=140&height=140",
      Title: "Mi TV P1 Series",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/0320/TO-B/800/TV-75-QLED-800png.png?width=140&height=140",
      Title: "Mi TV Q1 75inch",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/Iris/more.jpg?width=140&height=140",
      Title: "More",
    },
  ];
  const Smart = [
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/watchs1ac.jpg?width=140&height=140",
      Title: "Xiaomi Watch S1 Active",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/watchs1.png?width=140&height=140",
      Title: "Xiaomi Watch S1",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/0320/TO-B/800/Purifier-4-800png.png?width=140&height=140",
      Title: "Xiaomi Smart Air Purifier 4",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/k82black800.png?width=140&height=140",
      Title: "Xiaomi Pad 5",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/dongxuechun/redmi-smart-band-pro.jpg?width=140&height=140",
      Title: "Redmi Smart Band Pro",
    },
    {
      img: "https://i01.appmifile.com/webfile/globalimg/Iris/more.jpg?width=140&height=140",
      Title: "More",
    },
  ];
  const Blank = [];

  const [slider, setSlider] = useState([]);

  const HandleXiaomi = () => {
    setSlider([...Xiaomi]);
  };
  const HandleRedmi = () => {
    setSlider([...Redmi]);
  };
  const HandleAudio = () => {
    setSlider([...Audio]);
  };
  const HandleMi_TV = () => {
    setSlider([...Mi_TV]);
  };
  const HandleSmart = () => {
    setSlider([...Smart]);
  };
  const OutHandle = () => {
    setSlider([...Blank]);
  };

  return (
    <div className="Navbar_Main">
      <div className="Navbar_Upper_Main">
        <div className="Navbar_Upper">
          <div className="First_left">
            <a href="#" className="UpperNav_Links">
              INTERNATIONAL
            </a>
            <p className="P_Tag">|</p>
            <a href="#" className="UpperNav_Links">
              MI COMMUNITY
            </a>
            <p className="P_Tag">|</p>
            <a
              href="https://global.miui.com/en"
              target="_blank"
              className="UpperNav_Links"
            >
              MIUI
            </a>
            <p className="P_Tag">|</p>
            <a
              href="https://event.mi.com/global/xiaomistudios"
              className="UpperNav_Links"
            >
              XIAOMI STUDIOS
            </a>
          </div>
          <div className="First_right">
            <Link to={"/signin"} className="UpperNav_Links">
              SIGN IN
            </Link>
            <p className="P_Tag">|</p>
            <Link to={"/signup"} className="UpperNav_Links">
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
      <div className="Navbar_Lower_Main" onMouseLeave={OutHandle}>
        <div className="Navbar_Lower">
          <div className="Mi_Logo">
            <Link to={"/"} className="Mi_Home" onMouseOver={OutHandle}>
              <img
                src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
                alt="Mi_Home"
              />
            </Link>
          </div>
          <div className="Hover_Nav_Links">
            <div className="Hover_First">
              <p className="Slider_Links" onMouseOver={HandleXiaomi}>
                Xiaomi Phones
              </p>
              <p className="Slider_Links" onMouseOver={HandleRedmi}>
                Redmi Phones
              </p>
              <p className="Slider_Links" onMouseOver={HandleAudio}>
                Audio
              </p>
              <p className="Slider_Links" onMouseOver={HandleMi_TV}>
                Mi TV
              </p>
              <p className="Slider_Links" onMouseOver={HandleSmart}>
                Smart Devices
              </p>
            </div>
            <div className="Hover_Second">
              <Link
                to={"/allproducts"}
                className="Non_Slider_Links"
                onMouseOver={OutHandle}
              >
                All Products
              </Link>
              <Link
                to={"/"}
                className="Non_Slider_Links"
                onMouseOver={OutHandle}
              >
                Product Authentication
              </Link>
              <Link
                to={"/"}
                className="Non_Slider_Links"
                onMouseOver={OutHandle}
              >
                Discover
              </Link>
            </div>
          </div>
        </div>
        <div className="Nav_Slider_Main">
          <div className="Inner_Slider">
            {slider.map((item) => (
              <Link to={"/allproducts"} className="Item_Link">
                <div className="Slider_Item">
                  <img src={item.img} alt="" />
                  <p>{item.Title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
