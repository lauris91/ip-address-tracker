import React from "react";

const placeHolder = "Search for any IP address or domain";

const Header = ({ value, setInputValue, handleSubmit, searchData }) => {
  // console.log("searchData ", searchData);

  return (
    <header>
      <div className="header-container">
        <div className="title">
          <h1>IP Address Tracker</h1>
        </div>
        <form className="search-box" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="textField"
            value={value}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder={placeHolder}
          />
          <button></button>
        </form>
      </div>
      <div id="ip" className="info-box">
        <div className="info-box-col">
          <div className="col-name">IP Address</div>
          <div className="col-value">{searchData ? searchData.ip : "N/A"}</div>
        </div>
        <div id="location" className="info-box-col">
          <div className="col-name">Location</div>
          <div className="col-value">
            {searchData && searchData.location
              ? `${searchData.location.city}, ${searchData.location.region} ${searchData.location.postalCode}`
              : "N/A"}
          </div>
        </div>
        <div id="tz" className="info-box-col">
          <div className="col-name">Timezone</div>
          <div className="col-value">
            {searchData && searchData.location
              ? `UTC ${searchData.location.timezone}`
              : "N/A"}
          </div>
        </div>
        <div id="isp" className="info-box-col">
          <div className="col-name">ISP</div>
          <div className="col-value">{searchData ? searchData.isp : "N/A"}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
