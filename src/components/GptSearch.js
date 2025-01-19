import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_LOGIN } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="h-[100vh]">
      <div className="fixed -z-10">
        <img
          src={BG_LOGIN}
          alt="background-img"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;