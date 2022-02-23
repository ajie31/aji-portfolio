import styles from "../../../../../style/football.module.css";

export const Paragraph = ({ description }) => {
  return (
    <div className="full-width">
      <p className="keterangan-center">{description}</p>
    </div>
  );
};
