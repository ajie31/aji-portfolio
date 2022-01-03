//#region  By Distance
const passByDistance = (d) => {
  return [
    {
      name: "Pass Progress Distance Rate",
      value: () => d["PPrgDist"] / d["PTotDist"],
      multiplier: 1,
      color: "#BF4A3F",
      color2: "F4D36E",
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
      color2: "F4D36E",
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
      color2: "F4D36E",
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
      multiplier: 3,
      color: "#cd6a37",
      color2: "F4D36E",
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

//#region 1/3 attacking field

const passByOneThird = (d) => {
  return [
    {
      name: "Progressive Pass into 1/3 attacking field",
      value: () => d["P 1/3"] / d["PCmp"],
      multiplier: 5,
      color: "#BF4A3F",
      color2: "F4D36E",
      action: "Umpan Masuk 1/3 Lapangan Lawan",
    },
    {
      name: "Progressive Pass",
      value: () => (d["PCmp"] - d["P 1/3"]) / d["PCmp"],
      multiplier: 1,
      color: "#F4D36E",
      action: "Umpan Sukses",
    },
  ];
};
const carryByOneThird = (d) => {
  const carriesSucc = d["Carries"] - d["CDis"] - d["CMis"];
  return [
    {
      name: "Progressive Carries",
      value: () => d["C 1/3"] / carriesSucc,
      multiplier: 9,
      color: "#cd6a37",
      color2: "F4D36E",
      action: "Dribble Masuk 1/3 Lapangan Lawan",
    },
    {
      name: "Non-Progressive Carries",
      value: () => (carriesSucc - d["C 1/3"]) / carriesSucc,
      multiplier: 1,
      color: "#F4D36E",
      action: "Dribble Sukses",
    },
  ];
};
//#endregion

//#region Into Penalty area

const passPenaltiArea = (d) => {
  return [
    {
      name: "Progressive Pass into penalty area",
      value: () => d["PPA"] / d["PCmp"],
      multiplier: 13,
      color: "#BF4A3F",
      color2: "F4D36E",
      action: "Umpan Masuk Kotak Penalti Lawan",
    },
    {
      name: "Progressive Pass",
      value: () => (d["PCmp"] - d["PPA"]) / d["PCmp"],
      multiplier: 1,
      color: "#F4D36E",
      action: "Umpan Sukses",
    },
  ];
};
const carryPenaltiArea = (d) => {
  const carriesSucc = d["Carries"] - d["CDis"] - d["CMis"];

  return [
    {
      name: "Progressive Carries",
      value: () => d["CPA"] / carriesSucc,
      multiplier: 20,
      color: "#cd6a37",
      color2: "F4D36E",
      action: "Dribble Masuk Kotak Penalti Lawan",
    },
    {
      name: "Non-Progressive Carries",
      value: () => (carriesSucc - d["CPA"]) / carriesSucc,
      multiplier: 1,
      color: "#F4D36E",
      action: "Dribble Sukses",
    },
  ];
};
//#endregion
// * DATA PROCESS MAIN

export const dataProcess = {
  byDistance: {
    pass: (d) => passByDistance(d),
    carry: (d) => carryByDistance(d),
    topic: "byDistance",
    label: "Perbandingan Jarak",
    description: "still in construction",
  },
  byAction: {
    pass: (d) => passByActions(d),
    carry: (d) => carryByActions(d),
    topic: "byAction",
    label: "Perbandingan Aksi",
    description: "still in construction",
  },
  byOneThird: {
    pass: (d) => passByOneThird(d),
    carry: (d) => carryByOneThird(d),
    topic: "byOneThird",
    label: "Perbandingan 1/3 Lapangan Lawan",
    description: "still in construction",
  },
  byPenaltyArea: {
    pass: (d) => passPenaltiArea(d),
    carry: (d) => carryPenaltiArea(d),
    topic: "byPenaltyArea",
    label: "Perbandingan Penalti Lawan",
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
