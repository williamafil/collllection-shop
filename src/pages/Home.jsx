import React from "react";
import Alert from "../components/Alert";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryItems from "../components/CategoryItems";
import SendCard from "../components/SendCard";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Alert />
      <Header />
      <main className="container mx-auto pt-5 px-5 pb-20">
        <Hero />
        <CategoryItems />
        <SendCard />
        <Subscription />
      </main>
      <Footer />
    </>
  );
};

export default Home;
