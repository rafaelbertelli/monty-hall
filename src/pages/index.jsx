import Head from "next/head";
import { useState } from "react";
import Door from "../components/door";

import Gift from "../components/gift";
import DoorModel from "../model/door";

export default function Home() {
  const [d1, setD1] = useState(new DoorModel(1));

  return (
    <div>
      <Head>
        <title>Monty Hall App</title>
        <meta name="description" content="Monty Hall Game App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Gift />

      <div style={{ display: "flex" }}>
        <Door value={d1} onChange={(newDoor) => setD1(newDoor)} />
      </div>
    </div>
  );
}
