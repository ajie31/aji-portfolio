export const progressByDistance = (d) => {
  const totalDist = d["PTotDist"] + d["CTotDist"];

  return [
    {
      name: "Pass Progress Distance Rate",
      value: () => d["PPrgDist"] / totalDist,
      color: "#BF4A3F",
      action: "Umpan Progresif",
    },
    {
      name: "Carry Progress Distance Rate",
      value: () => d["CPrgDist"] / totalDist,
      color: "#cd6a37",
      action: "Dribble Progresif",
    },

    {
      name: "Pass Non Progress Distance Rate",
      value: () => (d["PTotDist"] - d["PPrgDist"]) / totalDist,
      color: "#F2BE24",
      action: "Umpan Tidak Progresif",
    },
    {
      name: "Carry Non Progress Distance Rate",
      value: () => (d["CTotDist"] - d["CPrgDist"]) / totalDist,
      color: "#F4D36E",
      action: "Dribble Tidak Progresif",
    },
  ];
};

export const progressByActions = (d) => {
  const totalActs = d["PCmp"] + d["Carries"];

  return [
    {
      name: "Pass Progress Action Rate",
      value: () => d["PProg"] / totalActs,
      color: "#BF4A3F",
      action: "Umpan Progresif",
    },
    {
      name: "Carry Progress Action Rate",
      value: () => d[" "] / totalActs,
      color: "#cd6a37",
      action: "Dribble Progresif",
    },

    {
      name: "Pass Non Progress Distance Rate",
      value: () => (d["PCmp"] - d["PProg"]) / totalActs,
      color: "#F2BE24",
      action: "Umpan Tidak Progresif",
    },
    {
      name: "Carry Non Progress Distance Rate",
      value: () => (d["Carries"] - d["CProg"]) / totalActs,
      color: "#F4D36E",
      action: "Dribble Tidak Progresif",
    },
  ];
};
// "Squad",
// "# Pl",
// "Poss",
// "90s",
// "Carries",
// "CTotDist",
// "CPrgDist",
// "CProg",
// "C 1/3",
// "CPA",
// "DSucc",
// "DAtt",
// "DPassed",
// "PCmp",
// "PAtt",
// "PTotDist",
// "PPrgDist",
// "PProg",
// "P 1/3",
// "PPA",
// "CrsPA",
