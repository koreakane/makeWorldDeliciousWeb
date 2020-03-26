import React, { useState, useEffect } from "react";
import ListBar from "./ListBar";
import "./ComponentStyles.scss";

const List = ({ storeData }) => {
  if (storeData.length > 0)
    return (
      <div className="List">
        {storeData.map((data, index) => (
          <ListBar {...data} />
        ))}
      </div>
    );
  else return <div className="List">로딩중...!</div>;
};

export default List;
