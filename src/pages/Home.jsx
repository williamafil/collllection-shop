import React from "react";
import Hero from "../components/Hero";
import CategoryItems from "../components/CategoryItems";
import SendCard from "../components/SendCard";
import Subscription from "../components/Subscription";

const Home = () => {
  return (
    <>
      <main className="container mx-auto pt-5 px-5 pb-20">
        <Hero />
        <CategoryItems />
        <SendCard />
        <Subscription />
      </main>
    </>
  );
};

export default Home;
