import React from "react";

import IntroImc from "./componentsIMC/intro/IntroIMC.js"
import CalculatorIMC from "./componentsIMC/calculator/CalculatorIMC.js";
import Divider from "../../../components/Divider/Divider.js";
import InfoIMC from "./componentsIMC/info/InfoIMC.js";

const TestIMC = () => (
    <>
    <IntroImc/>
    <CalculatorIMC/>
    <Divider color="var(--c-text-primary)" width={"10%"}/>
    <InfoIMC/>
    </>
);

export default TestIMC;