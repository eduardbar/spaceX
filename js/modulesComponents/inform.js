import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal
} from "../modules/rockets.js";

const createDivWithClass = (className) => {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
};

const createStrongElement = (text) => {
    const strong = document.createElement('strong');
    strong.textContent = text;
    return strong;
};

const createSmallElement = (text) => {
    const small = document.createElement('small');
    small.innerHTML = text;
    return small;
};

const appendChildren = (parent, ...children) => {
    children.forEach(child => {
        parent.appendChild(child);
    });
};

const formatNumber = (number) => {
    return new Intl.NumberFormat('cop').format(number);
};

const createProgressBar = (percentage, label, kN, lbf) => {
    const div = createDivWithClass("carousel__item");
    const divFirst = createDivWithClass("item__progress__bar");
    divFirst.style.background = `radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${percentage}%, transparent 0)`;

    const divFirstChildren = createDivWithClass("progress__value");
    const strong = createStrongElement(label);
    const smallFirst = createSmallElement(`${percentage.toFixed(2)} %`);
    const smallLast = createSmallElement(`${formatNumber(kN)} kN <br> ${formatNumber(lbf)} Lbf`);

    appendChildren(divFirstChildren, strong, smallFirst, smallLast);
    appendChildren(divFirst, divFirstChildren);
    appendChildren(div, divFirst);

    return div;
};

export const informRocketEngineThrustSeaLevel = async (thrust_sea_level) => {
    const totalRocketEngine = await getAllRocketEngineTotal();
    const percentage = (thrust_sea_level.kN * 100) / totalRocketEngine.kN;

    const div = createProgressBar(percentage, "Atmospheric acceleration", thrust_sea_level.kN, thrust_sea_level.lbf);

    const sectionInformation = document.querySelector("#section__information__1");
    sectionInformation.innerHTML = "";
    sectionInformation.appendChild(div);
};

export const informRocketEngineThrustVacuum = async (thrust_vacuum) => {
    const { kN: totalKN } = await getAllRocketEngineThrustVacuumTotal();
    const percentage = (thrust_vacuum.kN * 100) / totalKN;

    const div = createProgressBar(percentage, "Speed in space", thrust_vacuum.kN, thrust_vacuum.lbf);

    const sectionInformation = document.querySelector("#grafica2");
    sectionInformation.appendChild(div);
};

export const informRocketEngineThrustVacuum1 = async (thrustVacuum) => {
    const { kN: totalKN } = await getAllRocketEngineThrustVacuumTotal();
    const percentage = (thrustVacuum.kN * 100) / totalKN;

    const div = createProgressBar(percentage, "Speed in space", thrustVacuum.kN, thrustVacuum.lbf);

    const sectionInformation = document.querySelector("#grafica");
    sectionInformation.appendChild(div);
};
