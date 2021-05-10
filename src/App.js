import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Map from "./Components/Map";

const getIPData = async (ip = "") => {
  const ipData = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_1P8R2YXGc34F7DjKmE1Lv3KQEoRFB&ipAddress=${ip}`
  )
    .then((response) => response.json())
    .then((data) => data);

  return ipData;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    getIPData().then((data) => {
      setSearchData({
        ip: data.ip,
        isp: data.isp,
        location: data.location,
      });
    });
  }, []);

  useEffect(() => {
    if (map) {
      map.flyTo([searchData.location.lat, searchData.location.lng], 14);
    }
  }, [searchData, map]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    getIPData(inputValue).then((data) => {
      setSearchData({
        ip: data.ip,
        isp: data.isp,
        location: data.location,
      });
    });
  };

  if (!searchData) return <div className="loading"></div>;

  return (
    <div className="wrapper">
      <Header
        value={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        searchData={searchData}
      />
      {!searchData ? (
        <div class="lds-dual-ring"></div>
      ) : (
        <Map searchData={searchData} setMap={setMap} />
      )}
    </div>
  );
}

export default App;
