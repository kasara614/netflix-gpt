import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularTv } from "../utils/moviesSlice";

const usePopularTv = () => {

  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularTv = useSelector((store) => store.movies.popularTv);

  const getPopularTv = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularTv(json.results));
  };

  useEffect(() => {
    !popularTv && getPopularTv();
  }, []);
};

export default usePopularTv;