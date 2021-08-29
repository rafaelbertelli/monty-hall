import DoorModel from "../../model/door";
import styles from "./Door.module.css";
import Gift from "../gift";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const { value, onChange } = props;

  const selectedDoor =
    value.selected && !value.opened ? styles.selectedDoor : "";

  const toggleSelection = (e) => onChange(value.toggleSelection());
  const openDoor = (e) => {
    e.stopPropagation();
    onChange(value.open());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{value.number}</div>
        <div className={styles.knob} onClick={openDoor}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        {value.closed ? renderDoor() : value.hasGift && <Gift />}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
