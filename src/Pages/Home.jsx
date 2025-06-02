import React, { Suspense } from "react";
import Hero from "../Component/Hero";
import Jobs from "../Component/Jobs";

const Home = () => {
  const jobs = fetch("http://localhost:3000/jobs").then((res) => res.json());

  return (
    <div>
      <Hero></Hero>
      <Suspense fallback={<p>Loading</p>}>
        <Jobs jobs={jobs}></Jobs>
      </Suspense>
    </div>
  );
};

export default Home;
