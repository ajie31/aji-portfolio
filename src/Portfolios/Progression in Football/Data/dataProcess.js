//#region  By Distance
const passByDistance = (d) => {
  return [
    {
      name: "Pass Progress Distance Rate",
      value: () => d["PPrgDist"] / d["PTotDist"],
      multiplier: 1,
      color: "#BF4A3F",
      action: "Umpan Progresif",
    },

    {
      name: "Pass Non Progress Distance Rate",
      value: () => (d["PTotDist"] - d["PPrgDist"]) / d["PTotDist"],
      multiplier: 1,
      color: "#F4D36E",
      action: "Umpan Tidak Progresif",
    },
  ];
};

const carryByDistance = (d) => {
  return [
    {
      name: "Carry Progress Distance Rate",
      value: () => d["CPrgDist"] / d["CTotDist"],
      multiplier: 1,
      color: "#cd6a37",
      action: "Dribble Progresif",
    },
    {
      name: "Carry Non Progress Distance Rate",
      value: () => (d["CTotDist"] - d["CPrgDist"]) / d["CTotDist"],
      multiplier: 1,
      color: "#F4D36E",
      action: "Dribble Tidak Progresif",
    },
  ];
};
//#endregion

//#region ByAction

const passByActions = (d) => {
  return [
    {
      name: "Progressive Pass",
      value: () => d["PProg"] / d["PCmp"],
      multiplier: 5,
      color: "#BF4A3F",
      action: "Umpan Progresif",
    },
    {
      name: "Non-progressive Pass",
      value: () => (d["PCmp"] - d["PProg"]) / d["PCmp"],
      multiplier: 5,
      color: "#F4D36E",
      action: "Umpan Tidak Progresif",
    },
  ];
};
const carryByActions = (d) => {
  const carriesSucc = d["Carries"] - d["CDis"] - d["CMis"];

  return [
    {
      name: "Progressive Carries",
      value: () => d["CProg"] / carriesSucc,
      multiplier: 5,
      color: "#cd6a37",
      action: "Dribble Progresif",
    },
    {
      name: "Non-Progressive Carries",
      value: () => (carriesSucc - d["CProg"]) / carriesSucc,
      multiplier: 5,
      color: "#F4D36E",
      action: "Dribble Tidak Progresif",
    },
  ];
};
//#endregion

// * DATA PROCESS MAIN

export const dataProcess = {
  byDistance: {
    pass: (d) => passByDistance(d),
    carry: (d) => carryByDistance(d),
    label: "By Distance",
    description: "still in construction",
  },
  byAction: {
    pass: (d) => passByActions(d),
    carry: (d) => carryByActions(d),
    label: "By Actions",
    description: "still in construction",
  },
};

// ? keys list
/** 
"Squad",
"# Pl",
"Poss",
"90s",
"Carries",
"CTotDist",
"CPrgDist",
"CProg",
"C 1/3",
"CPA",
"DSucc",
"DAtt",
"DPassed",
"PCmp",
"PAtt",
"PTotDist",
"PPrgDist",
"PProg",
"P 1/3",
"PPA",
"CrsPA",*/
