import styled from "styled-components";
import { getSession, signIn } from "next-auth/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Container = styled.div`
  background-image: linear-gradient(180deg, var(--blue), var(--blue-dark));
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .backgroundImage {
    display: flex;
    flex: 1;
    background-image: url("icons/logobig.svg");
  }

  #logo {
    margin-bottom: 6rem;
  }

  section {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 5rem;

    h2 {
      color: var(--white);
      font-weight: bold;
    }

    div > div {
      display: flex;
      align-items: center;
      margin-top: 1.5rem;
      margin-bottom: 2rem;
      h4 {
        margin-left: 1rem;
        color: var(--text-highlight);
      }
    }

    button {
      width: 60%;
      height: 4rem;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 5px;
      background: var(--green);
      color: var(--white);
      font-size: 1.25rem;
      font-weight: 600;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
