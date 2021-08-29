import Head from "next/head";
import { useState } from "react";
import Door from "../components/door";
import Gift from "../components/gift";
import { createDoors, updateDoors } from "../functions/doors";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(5, 2));

  return (
    <div>
      <Head>
        <title>Monty Hall App</title>
        <meta name="description" content="Monty Hall Game App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex" }}>
        {doors.map((d) => (
          <Door
            key={d.number}
            value={d}
            onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
          />
        ))}
      </div>
    </div>
  );
}
