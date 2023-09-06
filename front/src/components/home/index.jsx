import TopAllGames from "./TopGames";
import sloganMobile from "../../assets/slogan-mobile.png";

function HomeContent() {

  return (
    <div className="flex-grow w-min">
      <img className="mt-5 mx-auto w-11/12 max-w-2xl" src={sloganMobile} alt="" />
      <TopAllGames />
    </div>
  );
}

export default HomeContent;