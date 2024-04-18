import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

import "./style.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUrl } from "../../../store/homeSlice";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

function HeroBanner() {
  const [background, setBackground] = useState("");
  const url = useSelector(getUrl);

  const { data, loading } = useFetch("/movie/upcoming");


  useEffect(
    function () {
      const bg =
        url.backdrop +
        data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
      setBackground(bg);
    },
    [data, url.backdrop]
  );

  return (
    <div className="heroBanner">
      <div className="backdrop-img">{!loading && <Img src={background} />}</div>

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
