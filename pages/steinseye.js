import Head from "next/head";
import styles from "../styles/Home.module.css";

const Steinseye = () => {
  return (
    <>
      <Head>
        <title>WIRED</title>
        <link rel="icon" href="/wired.gif" />
      </Head>
      <style jsx global>
        {`
          #__next {
            width: 100%;
            height: 100%;
          }

          body {
            height: 100%;
            width: 100%;
            background-image: url("https://www.gamesource.it/wp-content/uploads/2015/07/steins-gate_2015_05-20-15_014.jpg");
            background-size: 100vw 100vh;
          }
          html {
            height: 100vh;
            width: 100vw;
          }
        `}
      </style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
      >
       
      </div>
    </>
  );
};

export default Steinseye