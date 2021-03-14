import { GetServerSideProps } from "next";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import styles from "../styles/pages/Home.module.css";

interface BaseProps {
  level?: number;
  currentExperience?: number;
  challengesCompleted?: number;
  children: ReactNode;
}

export default function Base(props: BaseProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <NavBar/>
      <div className={styles.container}>{props.children}</div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
