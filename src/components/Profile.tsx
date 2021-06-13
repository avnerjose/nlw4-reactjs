import { useContext, useState } from "react";
import { useSession } from "next-auth/client";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { Container } from "../styles/components/Profile";
import { ProfileDetailModal } from "./ProfileDetailModal";

export function Profile() {
  const [modalOpen, setModalOpen] = useState(false);
  const { level, challengesCompleted, currentExperience } =
    useContext(ChallengesContext);
  const [session] = useSession();
  return (
    <Container>
      <img
        onClick={() => setModalOpen(true)}
        src={session.user.image}
        alt="Imagem de Perfil"
      />
      <div>
        <strong>{session.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
      {modalOpen && (
        <ProfileDetailModal
          setModalOpen={setModalOpen}
          user={{
            ...session.user,
            currentExperience,
            challengesCompleted,
            level,
          }}
        />
      )}
    </Container>
  );
}
