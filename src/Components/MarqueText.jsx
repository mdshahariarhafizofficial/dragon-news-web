import React, { use, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { LatestNewsContext } from "../Contexts/Latest News Context/LatestContext";

const MarqueText = () => {
  const [latestTitle,setLatestTitle] = useState([]); 
  const {latest} = use(LatestNewsContext)

  useEffect(()=>{
    const filterLatest = latest.filter(news => news.others.is_today_pick === true);
    setLatestTitle(filterLatest)    
  }, [latest])

  
  return (
    <div>
      <div className="flex items-center gap-5 bg-base-200 p-4">
        <p className="bg-secondary text-white px-5 py-2 text-xl">Latest</p>

        <Marquee className="flex gap-5" speed={120}>
          <div className="flex items-center gap-5">
        {
          latestTitle.map(n => <p key={n.id} className="text-black font-semibold">{n.title}.</p>)
        }
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueText;
