/** @format */
import Me from "../../images/me.png";
import {images} from "../../images/icons-codes";
import "./main.scss";
import SV from "../../docs/קורות חיים - שלומי סעדון .pdf";
import Computer from "../../images/7.png";
// import Carousel from "./carousel";
const Main = () => {
  return (
    <>
      {/* avatar section */}
      <div className="boxMain d-flex" id="Main">
        <div className="boxMain">
          <b>Shlomi Saadon</b>
          <p>Web Developer</p>
          <img width={200} src={Me} alt="born" />
        </div>
      </div>
      {/* avatar section */}

      {/* icons | section */}
      <div className="d-flex icons flex-wrap justify-content-center align-items-center mt-5">
        {images.map((data, index) => {
          return <img key={index} src={data.default} alt="born" />;
        })}
      </div>

      {/* icons | section */}

      <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
        <a className="btn btn-primary text-white fw-bold" href={SV} download>
          להורדת קורות החיים
        </a>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center ">
        <img width={200} src={Computer} alt="" />
      </div>
      {/* <Carousel></Carousel> */}
    </>
  );
};

export default Main;
