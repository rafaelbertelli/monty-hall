import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Card from "../components/card";
import NumberInput from "../components/NumberInput";
import styles from "../styles/Form.module.css";

export default function Form() {
  const [doorQuantity, setDoorQuantity] = useState(3);
  const [giftDoor, setGiftDoor] = useState(2);

  return (
    <div>
      <Head>
        <title>Monty Hall App</title>
        <meta name="description" content="Monty Hall Game App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.form}>
        <div>
          <Card bgColor="#c0392c">
            <h1>Monty Hall</h1>
          </Card>
          <Card>
            <NumberInput
              text={"Quantidade de portas?"}
              value={doorQuantity}
              onChange={setDoorQuantity}
            />
          </Card>
        </div>
        <div>
          <Card>
            <NumberInput
              text={"Porta premiada?"}
              value={giftDoor}
              onChange={setGiftDoor}
            />
          </Card>
          <Card bgColor="#28a085">
            <Link href={`/game/${doorQuantity}/${giftDoor}`} passHref>
              <h2 className={styles.link}>Iniciar</h2>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
