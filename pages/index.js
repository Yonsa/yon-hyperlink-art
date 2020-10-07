import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
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
            background-image: url("/blue_waves.gif");
            background-size: 100vw 100vh;
          }
          html {
            height: 100vh;
            width: 100vw;
          }
        `}
      </style>
      {/* <div
        style={{
          height: "525px",
          width: "525px",
          position: "fixed",
          backgroundImage:
            "url('https://thumbs.gfycat.com/DesertedNeglectedDalmatian-small.gif')",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          flexDirection:"column",
        }}
      >
        <h1
          className={styles.centered}
          style={{
            margin: 0,
            color: "#EEEEEE",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            fontSize: "calc(2.5vw + 1vh)",
            position:"relative",
            top: "-3%"
          }}
        >
          W I R E D
        </h1>
        <img
          src="/wired.gif"
          style={{
            height: "52%",
            width: "39%",
            maxWidth: "666px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    </>
  );
}
