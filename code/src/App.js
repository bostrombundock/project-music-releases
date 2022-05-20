import React from "react";
import data from "./data.json";

import Album from "./components/Album";
import Header from "./components/Header";

console.log("data", data);

export const App = () => {
  return (
    <div>
      <Header />
      <section className="album-wrapper">
        {data.albums.items.map((items) => {
          return <Album key={items.id} albumDetails={items} />;
        })}
      </section>
    </div>
  );
};
