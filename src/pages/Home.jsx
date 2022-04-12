import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";
const Home = () => {
  return (
    <div>
      <div className="video-bg">
        <video
          src="https://www.chanel.com/videos/e_volume:mute/q_90,f_mp4,c_scale,w_2560,c_limit/FSH-1649166514894-handbags22combod.mp4"
          autoPlay
          loop
        ></video>
        <div className="video-bg__content">
          <h2> THE CHANEL 22 BAG</h2>
          <p>
            In the sagacity of cities, the plenitude of open spaces or the
            daydream of a villa, CHANEL ambassadors Whitney Peak, Margaret
            Qualley and Lily-Rose Depp play the game of autobiography. Like a
            page of a diary written in an affable, imaginary ink, they tell
            their stories, and ours.
          </p>
          <p>
            On their arm, the CHANEL 22 bag, a genuine ally for daily life
            captured by Inez & Vinoodh through three films.
          </p>
        </div>
      </div>
      <div className="video-bg">
        <video
          src="https://www.chanel.com/videos/e_volume:mute/q_90,f_mp4,c_scale,w_2560,c_limit/FSH-1648644712460-chanelhandbagscollage1920x1080newcropwp.mp4"
          autoPlay
          loop
        ></video>
      </div>
      <div className="image-bg1">
        {/* <img
          width="100%"
          src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_2560/FSH-1649174599213-desktopwp02.png"
          alt=""
        /> */}
        <div className="button">
          <Link to="/products">
            <Button style={{ color: "white" }} variant="outlined">
              See more chanel products
            </Button>
          </Link>
        </div>
      </div>

      <div className="video-bg">
        <video
          src="https://www.chanel.com/videos/e_volume:mute/q_90,f_mp4,c_scale,w_2560,c_limit/FSH-1648644697748-chanelhandbagscollage1920x1080newcroplrd.mp4"
          autoPlay
          loop
        ></video>
      </div>
      <div className="text_content">
        <p>
          “This might be my favourite CHANEL bag so far. I'm a huge fan of
          functional pieces and tend to travel with my life in my bag.”
        </p>
      </div>
      <div className="image-bg2">
        {/* <img
          width="100%"
          src="https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_2560/FSH-1646820630589-desktoplrd01.png"
          alt=""
        /> */}
        <div className="button">
          <Link to="/products">
            <Button style={{ color: "white" }} variant="outlined">
              See more chanel products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
