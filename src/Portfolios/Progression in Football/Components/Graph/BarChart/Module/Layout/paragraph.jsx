import styles from "../../../../../style/football.module.css";
import { Menu } from "./menu";
import { dataProcess } from "../../../../../Data/dataProcess";

export const Pragraph = ({
  items,
  topic,
  handleTopicChange,
  topicKeys,
  description,
}) => {
  return (
    <div className="full-width">
      <h5 className={styles["keterangan"]}>Keterangan</h5>
      <div className="full-width" style={{ marginTop: "1px" }}>
        <Menu
          items={items}
          topic={topic}
          handleTopicChange={handleTopicChange}
          topicKeys={topicKeys}
          dataProcess={dataProcess}
        />
      </div>
      <div className="full-width">
        <p className={styles["keterangan-center"]}>{description}</p>
      </div>

      {/* <ul className={styles["konten-keterangan-ul"]}>
        <li className={styles["konten-keterangan-li"]}>
          <span>Umpan Sukses p90</span>
          <ul>
            <li>
              <p>
                Merupakan operan yang sukses terhadap sesama member satu tim di
                setiap 90 menit pertandingan.
              </p>
            </li>
          </ul>
        </li>

        <li className={styles["konten-keterangan-li"]}>
          <span>Ratio Jarak Umpan Progressif p90</span>
          <ul>
            <li>
              <p>
                Merupakan rasio dari total jarak pergerakan bola dari aksi umpan
                sukses setiap 90 menit pertandingan dan total jarak pergerakan
                bola dari umpan progresif setiap 90 menit pertandingan.
              </p>
              <p>
                Umpan progresif, merupakan umpan sukses dimana pergerakan bola
                mendekati gawang lawan.
              </p>
            </li>
          </ul>
        </li>
      </ul> */}
    </div>
  );
};
