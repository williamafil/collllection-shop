import React from "react";
import Hero from "../components/Hero";
import CategoryItems from "../components/CategoryItems";
import SendCard from "../components/SendCard";
import Subscription from "../components/Subscription";
import CategoryList from "../components/Category/CategoryList";

const Home = () => {
  return (
    <>
      <main className="overflow-hidden container mx-auto pt-5 px-5 pb-20">
        <Hero />
        <div className="min-h-screen">
          <CategoryList />
        </div>
        <SendCard />
        <Subscription />
      </main>
    </>
  );
};

export default Home;
