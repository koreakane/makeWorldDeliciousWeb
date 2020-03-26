import React, { useState, useEffect } from "react";
import "./App.scss";
import useAsync from "../modules/useAsync";
import { getStoreInfo, getInfluencerInfo } from "../modules/serverAPI";
import List from "../components/List";
import SearchBar from "../components/SearchBar";

const App = () => {
  const [searchOption, setsearchOption] = useState({
    mode: "",
    location: {
      x: "",
      y: ""
    },
    keyword: "",
    page: 0,
    size: 100
  });

  const { mode, location, keyword, page, size } = searchOption;

  const [storeState, getStore] = useAsync(
    () => getStoreInfo(mode, location, keyword, page, size),
    [],
    false
  );
  const [influencerState, getInfluencer] = useAsync(
    () => getInfluencerInfo(),
    [],
    false
  );
  const [currentLocation, setcurrentLocation] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (mode === "null" || mode === "search" || mode === "location") {
      getStore();
    }
  }, [searchOption]);

  const {
    loading: storeLoading,
    data: storeData,
    error: storeError
  } = storeState;

  const {
    loading: influencerLoading,
    data: influencerData,
    error: influencerError
  } = influencerState;

  useEffect(() => {}, []);

  const searchButton = () => {
    setsearchOption({
      mode: "search",
      location: {
        x: "",
        y: ""
      },
      keyword: input,
      page: 0,
      size: 100
    });
  };

  return (
    <div className="App">
      <SearchBar setInput={setInput} searchButton={searchButton} />
      {storeData ? <List storeData={storeData.results} /> : <></>}
    </div>
  );
};

export default App;
