import Lottie from "react-lottie";
import animation from "../../public/loadingAnimation.json";
import Head from "next/head";
import { Container } from "../styles/components/LoadingAnimation";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function LoadingAnimation() {
  return (
    <Container>
      <Head>
        <title>Loading | MoveIt</title>
      </Head>
      <Lottie options={defaultOptions} height={200} width={200} />
    </Container>
  );
}
