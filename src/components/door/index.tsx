import DoorModel from "../../model/door";
import styles from "./Door.module.css";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const { value, onChange } = props;

  const selectedDoor = value.selected ? styles.selectedDoor : "";

  const toggleSelection = (e) => onChange(value.toggleSelection());

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        <div className={styles.door}>
          <div className={styles.number}>{value.number}</div>
          <div className={styles.knob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
