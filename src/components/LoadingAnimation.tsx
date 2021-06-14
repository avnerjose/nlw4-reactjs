import Lottie from "react-lottie-player";
import animation from "../../public/loadingAnimation.json";
import Head from "next/head";
import { Container } from "../styles/components/LoadingAnimation";

export function LoadingAnimation() {
  return (
    <Container>
      <Head>
        <title>Loading | MoveIt</title>
      </Head>
      <Lottie
        loop
        animationData={animation}
        play
        style={{ width: 200, height: 200 }}
      />
    </Container>
  );
}
