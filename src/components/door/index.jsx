import styles from "./Door.module.css";

export default function Door(props) {
  const selectedDoor = props.selected ? styles.selectedDoor : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selectedDoor}`}>
        <div className={styles.door}>
          <div className={styles.number}>9</div>
          <div className={styles.knob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
