import React from "react";
import IntroHome from "./componentsHome/intro/introHome";
import ConsultHome from "./componentsHome/consult/consultHome";
import TestHome from "./componentsHome/tests/testHome";
import Divider from "../../components/divider/Divider";
import Information from "./componentsHome/information/informationHome";

const Home = () => (
    <>
    <IntroHome />
    <ConsultHome />
    <TestHome />
    {/* <Divider width={'50%'} height={'2px'} color="var(--c-text-primary)"/> */}
    <Information />
    </>
);

export default Home;