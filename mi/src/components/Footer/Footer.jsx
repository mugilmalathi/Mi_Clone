import "./Footer.scss";
import axios from "axios";
import {
  RiArrowRightSLine,
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterFill,
} from "react-icons/ri";
import { ImInstagram } from "react-icons/im";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState();

  const HandleChange = (e) => {
    setEmail(e.target.value);
  };
  const HandleClick = (mail) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      axios
        .post("https://glacial-plateau-42634.herokuapp.com/email", {
          email: mail,
        })
        .then((res) => {
          alert(`Thanks, you will recive new updates on ${res.data.email}`);
        });
      return;
    }
    alert("You have entered an invalid email address!");
    return;
  };

  return (
    <div className="Footer_Page">
      <div className="Footer_Email">
        <div className="Left_side">
          <div className="Left_first">
            <h3>LET'S STAY IN TOUCH</h3>
            <p>Get updates on sales specials and more</p>
          </div>
          <div className="Left_second">
            <input
              type="email"
              placeholder="Enter Email Address"
              onChange={HandleChange}
            />
            <RiArrowRightSLine
              className="R_Arrow"
              onClick={() => {
                HandleClick(email);
              }}
            />
          </div>
        </div>
        <div className="Right_side">
          <div className="Right_first">
            <h3>FOLLOW MI</h3>
            <p>We want to hear from you!</p>
          </div>
          <div className="Right_second">
            <a href="https://www.facebook.com/XiaomiGlobal/" target="_blank">
              <RiFacebookFill className="L_Logos" />
            </a>
            <a href="https://www.youtube.com/user/XiaomiChina" target="_blank">
              <RiYoutubeFill className="L_Logos" />
            </a>
            <a href="https://www.instagram.com/xiaomi.global/" target="_blank">
              <ImInstagram className="L_Logos" />
            </a>
            <a href="https://twitter.com/Xiaomi" target="_blank">
              <RiTwitterFill className="L_Logos" />
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://user-images.githubusercontent.com/93377428/160822436-e99824c6-bf2c-4892-9e39-ce83782e5fe6.png"
        className="Black_Image"
        alt="Footer_Image"
      />
    </div>
  );
};
