import AllBoardGames from "../home/BoardGames";

function HomeContent() {
    return (
      <div className="flex-grow">
          <div className="flex flex-col items-center p-3">
              <h1 className="text-2xl font-bold text-neutral-600">BODY</h1>
              <AllBoardGames />
          </div>
      </div>
    );
  }
  
  export default HomeContent;