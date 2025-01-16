import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <Footer />
      {/* 
            MainContainer
              - VideoBackground
              - VideoTitle
            SecondaryContainer  
              - MoviesList * n
                  - cards * n
       */}
    </div>
  );
};

export default Browse;