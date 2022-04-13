import { useState, useEffect } from "react";
import { csv } from "d3";

const DATA_PROFILE_URI =
  "https://gist.githubusercontent.com/ajie31/ecb15cd7f1f789d3506f3f9c84df6585/raw/112a36902d4fa5da6ee4f7ca8547f7a642a28c23/playerProfile.csv";
// ?dATA cOLUMNS No,Name,Squad,Post,Nation,Age,Height,Appr,Goal,Asst,PassCMP%,AttPen,NpXgXa,SCA,Tkl,Inter,Block,PPass,Pcarry,Press,URIPict
export const GetDataProfile = () => {
  const [data, setData] = useState(null);
  const row = (d) => {
    d["No"] = +d["No"];
    d["Age"] = +d["Age"];
    d["Height"] = +d["Height"];
    d["Appr"] = +d["Appr"];
    d["Goal"] = +d["Goal"];
    d["Asst"] = +d["Asst"];
    d["AttPen"] = +d["AttPen"];
    d["NpXgXa"] = +d["NpXgXa"];
    d["SCA"] = +d["SCA"];
    d["Tkl"] = +d["Tkl"];
    d["Inter"] = +d["Inter"];
    d["Block"] = +d["Block"];
    d["Tkl"] = +d["Tkl"];
    d["PPass"] = +d["PPass"];
    d["PCarry"] = +d["PCarry"];
    d["Press"] = +d["Press"];
    return d;
  };

  useEffect(() => {
    csv(DATA_PROFILE_URI, row).then((profile) => {
      console.log(profile);
      setData(profile);
    });
  }, []);

  return data;
};
