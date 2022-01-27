//#region  By Distance
const passByDistance = (d) => {
  return {
    name: "Pass Progress Distance Rate",
    value: () => d["PPrgDist"] / d["PTotDist"],
    action: "Umpan Progresif",
  };
};

const carryByDistance = (d) => {
  return {
    name: "Carry Progress Distance Rate",
    value: () => d["CPrgDist"] / d["CTotDist"],
    action: "Dribble Progresif",
  };
};
//#endregion

//#region ByAction
const passByActions = (d) => {
  return {
    name: "Progressive Pass",
    value: () => d["PProg"] / d["PCmp"],
    action: "Umpan Progresif",
  };
};
const carryByActions = (d) => {
  const carriesSucc = d["Carries"] - d["CDis"] - d["CMis"];

  return {
    name: "Progressive Carries",
    value: () => d["CProg"] / carriesSucc,
    action: "Dribble Progresif",
  };
};
//#endregion

//#region 1/3 attacking field
const passByOneThird = (d) => {
  return {
    name: "Progressive Pass into 1/3 attacking field",
    value: () => d["P 1/3"] / d["PCmp"],
    action: "Umpan Masuk 1/3 Lapangan Lawan",
  };
};

const carryByOneThird = (d) => {
  const carriesSucc = d["Carries"] - d["CDis"] - d["CMis"];
  return {
    name: "Progressive Carries",
    value: () => d["C 1/3"] / carriesSucc,
    action: "Dribble Masuk 1/3 Lapangan Lawan",
  };
};
//#endregion

//#region Into Penalty area
const passPenaltiArea = (d) => {
  return {
    name: "Progressive Pass into penalty area",
    value: () => d["PPA"] / d["PCmp"],
    action: "Umpan Masuk Kotak Penalti Lawan",
  };
};
const carryPenaltiArea = (d) => {
  const carriesSucc = d["Carries"] - d["CDis"] - d["CMis"];

  return {
    name: "Progressive Carries",
    value: () => d["CPA"] / carriesSucc,
    multiplier: 20,
    color: "#cd6a37",
    color2: "F4D36E",
    action: "Dribble Masuk Kotak Penalti Lawan",
  };
};
//#endregion

// * DATA PROCESS MAIN
export const dataProcess = {
  byDistance: {
    pass: (d) => passByDistance(d),
    carry: (d) => carryByDistance(d),
    topic: "byDistance",
    label: "Jarak",
    description: "still in construction",
  },
  byAction: {
    pass: (d) => passByActions(d),
    carry: (d) => carryByActions(d),
    topic: "byAction",
    label: "Aksi",
    description: "still in construction",
  },
  byOneThird: {
    pass: (d) => passByOneThird(d),
    carry: (d) => carryByOneThird(d),
    topic: "byOneThird",
    label: "1/3 Lapangan Lawan",
    description: "still in construction",
  },
  byPenaltyArea: {
    pass: (d) => passPenaltiArea(d),
    carry: (d) => carryPenaltiArea(d),
    topic: "byPenaltyArea",
    label: "Masuk Penalti Lawan",
    description: "still in construction",
  },
};

export const dataProcessResult = {
  passing: {
    xValue: (d) => d["SCAPassLive"] / d["90s"],
    yValue: (d) => d["GCAPassLive"] / d["90s"],
    xLabel: "SCA Passing",
    yLabel: "GCA Passing",
  },
  dribling: {
    xValue: (d) => d["SCADrib"] / d["90s"],
    yValue: (d) => d["GCADrib"] / d["90s"],
    xLabel: "SCA Dribling",
    yLabel: "GCA Dribling",
  },
};

export const dataProcessPassXValue = {
  Ground: {
    value: (d) => d["Ground"] / d["90s"],
    desc: "Umpan Pada ketinggian menyentuh tanah",
    label: "Ground",
  },
  Low: {
    value: (d) => d["Low"] / d["90s"],
    desc: "Umpan Pada ketinggian di bawah bahu pemain",
    label: "Low",
  },
  High: {
    value: (d) => d["High"] / d["90s"],
    desc: "Umpan pada ketinggian di atas bahu pemain",
    label: "High",
  },
  Short: {
    value: (d) => d["Short"] / d["90s"],
    desc: "Umpan pada jarak 4.57m - 13.72m",
    label: "Short",
  },
  Medium: {
    value: (d) => d["Medium"] / d["90s"],
    desc: "Umpan pada jarak 12.72m - 27.4m",
    label: "Medium",
  },
  Long: {
    value: (d) => d["Long"] / d["90s"],
    desc: "Umpan pada jarak lebih dari 27.4m",
    label: "Long",
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
"CrsPA",
SCA	,
SCAPassLive	,
SCAPassDead	,
SCADrib	,
GCA	,
GCAPassLive	,
GCAPassDead	,
GCADrib*/
