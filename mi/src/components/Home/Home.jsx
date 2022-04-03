import "./Home.scss";
import { Link } from "react-router-dom";
import { SliderHome } from "./Slider/SliderHome";
import { AiFillPlayCircle } from "react-icons/ai";

export const Home = () => {
  return (
    <div className="Home_Main">
      <div className="Home_Sliding">
        <SliderHome />
      </div>
      <div className="All_Main">
        <div className="First_Three">
          <Link to={"/product"} className="Three_Single">
            <img
              src="https://i01.appmifile.com/webfile/globalimg/dongxuechun/purplecolor.jpg?width=398&height=230&160516"
              alt="Redmi Note 10S"
            />
          </Link>
          <Link to={"/product"} className="Three_Single">
            <img
              src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-small-banner/RN-10pro-small-banner-new.jpg?width=398&height=230&160516"
              alt="Redmi Note 10 Pro"
            />
          </Link>
          <Link to={"/product"} className="Three_Single">
            <img
              src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-small-banner/RN-10-small-banner-new.jpg?width=398&height=230&160516"
              alt="Redmi Note 10"
            />
          </Link>
        </div>
        <div className="Star_Main">
          <div className="Star_Line">
            <hr />
          </div>
          <div className="Star_Name">STAR PRODUCTS</div>
          <div className="Star_Line">
            <hr />
          </div>
        </div>
        <div className="Star_Products">
          <div className="Star_Left">
            <Link to={"/product"}>
              <img
                src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-Star-Products/watch-s1-s1active.jpg?width=612&height=612"
                alt="Watches"
              />
            </Link>
          </div>
          <div className="Star_Right">
            <div className="Right_Upper">
              <div>
                <Link to={"/product"}>
                  <img
                    src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-Star-Products/buds-3t-pro.jpg?width=612&height=612"
                    alt="Redmi Buds"
                  />
                </Link>
              </div>
              <div>
                <Link to={"/product"}>
                  <img
                    src="https://i01.appmifile.com/webfile/globalimg/dongxuechun/Redmi-Buds-3.jpg?width=612&height=612"
                    alt="Xiaomi Buds"
                  />
                </Link>
              </div>
            </div>
            <div className="Right_down">
              <Link to={"/product"}>
                <img
                  src="https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-Star-Products/StarPro4-Purifier-4Series.jpg?width=612&height=612"
                  alt="Air Purifier"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="Star_Main">
          <div className="Star_Line">
            <hr />
          </div>
          <div className="Star_Name">VIDEOS</div>
          <div className="Star_Line">
            <hr />
          </div>
        </div>
        <div className="Videos_Main">
          <a
            href="https://youtu.be/M-SNCMOrBUQ"
            target="_blank"
            className="Three_Vid"
          >
            <img
              src="https://i01.appmifile.com/webfile/globalimg/dongxuechun/11tprovideo.jpg?width=398&height=320"
              alt="Redmi Note 10S"
            />
            <div className="Play_Container">
              <AiFillPlayCircle className="Play" />
              <p className="Heading">Meet Xiaomi 11T Pro | Key Features</p>
            </div>
          </a>
          <a
            href="https://youtu.be/bNuz4m9Pj3Y"
            target="_blank"
            className="Three_Vid"
          >
            <img
              src="https://i01.appmifile.com/webfile/globalimg/dongxuechun/lite5gnevideo.jpg?width=398&height=320"
              alt="Redmi Note 10 Pro"
            />
            <div className="Play_Container">
              <AiFillPlayCircle className="Play" />
              <p className="Heading">Own Your Style | Xiaomi 11 Lite 5G NE</p>
            </div>
          </a>
          <a
            href="https://youtu.be/pPGzX_y8ccM"
            target="_blank"
            className="Three_Vid"
          >
            <img
              src="https://i01.appmifile.com/webfile/globalimg/dongxuechun/Pad_5_video.png?width=398&height=320"
              alt="Redmi Note 10"
            />
            <div className="Play_Container">
              <AiFillPlayCircle className="Play" />
              <p className="Heading">Xiaomi Pad 5 | Play Hard Work Smart</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
