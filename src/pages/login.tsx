import { useRouter } from "next/router";
import Head from "next/head";
import { getSession, signIn } from "next-auth/client";
import { Container } from "../styles/pages/login";

export default function LoginPage() {
  const session = getSession();
  const router = useRouter();
  const handleSignIn = async () => {
    await signIn("github").then(() => {
      if (session) {
        return router.push("/");
      }
    });
  };
  return (
    <Container>
      <Head>
        <title>Login | MoveIt</title>
      </Head>
      <div className="backgroundImage"></div>
      <section>
        <img id="logo" src="logofullwhite.svg" alt="Logo" />
        <div>
          <h2>Bem-vindo</h2>
          <div>
            <img src="icons/github.svg" alt="Github logo" />
            <h4>
              Faça login com seu Github <br />
              para começar
            </h4>
          </div>
        </div>
        <button onClick={handleSignIn}>Fazer Login</button>
      </section>
    </Container>
  );
}
