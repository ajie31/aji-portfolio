import { GitHub, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";
export const Links = ({ headClasses }) => {
  return (
    //style="list-style-type: none;"
    <div className={headClasses.linkReferences}>
      <div className={headClasses.linkBackground}>
        <Link href={"https://www.linkedin.com/in/wirawan-setio-aji/"} underline="hover">
          <a
            style={{ display: "flex", alignItems: "center" }}
            title="LinkedIn link"
          >
            <LinkedIn style={{ fill: "#d5e9ff" }} fontSize="large" />
          </a>
        </Link>
      </div>
      <div className={headClasses.linkBackground}>
        <Link href={"https://github.com/ajie31"} underline="hover">
          <a
            style={{ display: "flex", alignItems: "center" }}
            title="Github link"
          >
            <GitHub style={{ fill: "#d5e9ff" }} fontSize="large" />
          </a>
        </Link>
      </div>
    </div>
  );
};
