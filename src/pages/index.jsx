import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monty Hall App</title>
        <meta name="description" content="Monty Hall Game App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Início do jogo</h1>
      </div>
      <Link href="/game" passHref>
        <button>Iniciar o jogo</button>
      </Link>
    </div>
  );
}
