import React, { useState, useEffect } from "react";
import "./App.css";
import useAsync from "../modules/useAsync";
import { getStoreInfo, getInfluencerInfo } from "../modules/serverAPI";
import RestaurantSingleComponent from "../components/RestaurantSingleComponent";

const App = () => {
  const [storeState, getStore] = useAsync(() => getStoreInfo(), [], false);
  const [influencerState, getInfluencer] = useAsync(
    () => getInfluencerInfo(),
    [],
    false
  );
  const [currentLocation, setcurrentLocation] = useState(null);

  useEffect(() => {}, []);

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

  return (
    <div className="App">
      <RestaurantSingleComponent />
    </div>
  );
};

export default App;
