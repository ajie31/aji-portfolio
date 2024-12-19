import FootballerProfile from "../../../src/Portfolios/footballer-profile/footballerProfile";
import { useRouter } from "next/router";

const toTitleCase = (input_str) => {
  if (!input_str) {
    return "";
  }
  if (!input_str.trim()) {
    return input_str;
  }
  return input_str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const Index = () => {
  const router = useRouter();
  const club_selected = router.query.club_selected;
  console.log(club_selected);
  return <FootballerProfile club_selected={toTitleCase(club_selected)} />;
};
export default Index;
