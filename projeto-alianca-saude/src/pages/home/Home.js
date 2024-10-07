import React from "react";
import Header from "../../components/Header/Header";
import IntroHome from "./componentsHome/introHome";
import ConsultHome from "./componentsHome/consultHome";
import TestHome from "./componentsHome/testHome";
import Divider from "../../components/Divider/Divider";
import Information from "./componentsHome/informationHome";
import Footer from "../../components/Footer/Footer";

const Home = () => (
    <>
    <Header />
    <IntroHome />
    <ConsultHome />
    <TestHome />
    <Divider color="var(--c-text-primary)"/>
    <Information />
    <Footer />
    </>
);

export default Home;