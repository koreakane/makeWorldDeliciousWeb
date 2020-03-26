import React, { useState, useEffect } from "react";
import "./App.css";
import useAsync from "../modules/useAsync";
import { getStoreInfo, getInfluencerInfo } from "../modules/serverAPI";

const App = () => {
  const [storeState, getStore] = useAsync(() => getStoreInfo(), [], false);
  const [influencerState, getInfluencer] = useAsync(() => getInfluencerInfo(), [], false);
  const [currentLocationi, setCurrentLocationi] = useState(null)

  useEffect(() => {

  }, [])

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

  return <div className="App">
    ㅎㅇ
  </div>;
};

export default App;
