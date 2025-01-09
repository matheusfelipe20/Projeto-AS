import React, { useEffect } from "react";

import IntroImc from "./componentsIMC/intro/IntroIMC.js"
import CalculatorIMC from "./componentsIMC/calculator/CalculatorIMC.js";
import Divider from "../../../components/divider/Divider.jsx";
import InfoIMC from "./componentsIMC/info/InfoIMC.js";

const TestIMC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <IntroImc/>
        <CalculatorIMC/>
        <Divider color="var(--c-text-primary)" height={"1px"} width={"8%"}/>
        <InfoIMC/>
        </>
    );
};

export default TestIMC;