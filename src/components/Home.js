import React from "react";


const username = "Anna";
const city = "Nairobi";

function Home() {
 
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;

