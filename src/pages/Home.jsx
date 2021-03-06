import React from "react";
import Hero from "../components/Home/Hero";
import CategoryItems from "../components/Category/CategoryItems";
import SendCard from "../components/Home/SendCard";
import Subscription from "../components/Subscription/Subscription";
import CategoryList from "../components/Category/CategoryList";

const Home = () => {
  return (
    <>
      <div className="bg-lightOrange-50">
        <main className="overflow-hidden container mx-auto pt-5 px-5 pb-20 ">
          <Hero />
          <div className="min-h-screen">
            <CategoryList />
          </div>
          <SendCard />
          <Subscription />
        </main>
      </div>
    </>
  );
};

export default Home;
