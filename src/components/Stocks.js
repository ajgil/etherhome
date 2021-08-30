import React from "react";
import "./../App.css";
import { data } from '../data.js'

const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Your ETHER Home</h2>
      </header>
    );
  };

export const Stocks = () => {
  return (
    <>
        <HomePageHeader />
      <div className="stock-container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              {data.title +
                " , " +
                data.price +
                " ," +
                data.capacity +
                " ," +
                data.amenities +
                ", " +
                data.services}
            </div>
          );
        })}
      </div>
    </>
  );
};