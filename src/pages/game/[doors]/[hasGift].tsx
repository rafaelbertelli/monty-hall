import { useEffect, useState } from "react";
import Door from "../../../components/door";
import { createDoors, updateDoors, validDoors } from "../../../functions/doors";
import styles from "./Game.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const inputDoors = +router.query.doors;
    const inputGiftDoor = +router.query.hasGift;

    if (validDoors(inputDoors, inputGiftDoor))
      setDoors(createDoors(inputDoors, inputGiftDoor));
  }, [router.query]);

  function renderDoors() {
    return doors.map((d) => (
      <Door
        key={d.number}
        value={d}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ));
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.buttons}>
        <Link href="/" passHref>
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  );
}
