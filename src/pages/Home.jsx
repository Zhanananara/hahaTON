import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <div className="text">
        <p>
          THE CHANEL 22 BAG In the sagacity of cities, the plenitude of open
          spaces or the daydream of a villa, CHANEL ambassadors Whitney Peak,
          Margaret Qualley and Lily-Rose Depp play the game of autobiography.
          Like a page of a diary written in an affable, imaginary ink, they tell
          their stories, and ours. On their arm, the CHANEL 22 bag, a genuine
          ally for daily life captured by Inez & Vinoodh through three films.
        </p>
      </div>
      <div className="video">
        <video
          loop
          autoPlay
          style={{
            width: "100%",
            zIndex: "-1",
            //  height: "fit-content"
          }}
        >
          <source
            src="https://www.chanel.com/videos/e_volume:mute/q_90,f_mp4,c_scale,w_2560,c_limit/FSH-1649166514894-handbags22combod.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;
