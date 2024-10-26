import React from "react";
import IntroHome from "./componentsHome/intro/introHome";
import ConsultHome from "./componentsHome/consult/consultHome";
import TestHome from "./componentsHome/tests/testHome";
import Divider from "../../components/Divider/Divider";
import Information from "./componentsHome/information/informationHome";

const Home = () => (
    <>
    <IntroHome />
    <ConsultHome />
    <TestHome />
    <Divider color="var(--c-text-primary)"/>
    <Information />
    </>
);

export default Home;