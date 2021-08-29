import { useEffect, useState } from "react";
import Door from "../../../components/door";
import { createDoors, updateDoors } from "../../../functions/doors";
import styles from "./Game.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    setDoors(createDoors(+router.query.doors, +router.query.hasGift));
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
