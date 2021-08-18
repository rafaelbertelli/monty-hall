import DoorModel from "../../model/door";
import styles from "./Door.module.css";

interface DoorProps {
  door: DoorModel;
}

export default function Door(props: DoorProps) {
  const {
    door: { number, selected },
  } = props;

  const selectedDoor = selected ? styles.selectedDoor : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        <div className={styles.door}>
          <div className={styles.number}>{number}</div>
          <div className={styles.knob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
