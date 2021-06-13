import { signOut } from "next-auth/client";
import { Container, Overlay } from "../styles/components/ProfileDetailModal";

interface ProfileDetailModalProps {
  setModalOpen: (p: boolean) => void;
  user: {
    name?: string;
    image?: string;
    currentExperience: number;
    challengesCompleted: number;
    level: number;
  };
}
export function ProfileDetailModal({
  setModalOpen,
  user,
}: ProfileDetailModalProps) {
  const handleSignOut = () => {
    signOut();
  };
  return (
    <Overlay>
      <Container>
        <header>
          <img
            onClick={() => setModalOpen(true)}
            src={user.image}
            alt="Imagem de Perfil"
          />
          <div>
            <strong>{user.name}</strong>
            <p>
              <img src="icons/level.svg" alt="Level" />
              Level {user.level}
            </p>
          </div>
        </header>
        <main>
          <div>
            <h3>DESAFIOS</h3>
            <p>
              <span>{user.challengesCompleted}</span> completados
            </p>
          </div>
          <div>
            <h3>EXPERIÊNCIA</h3>
            <p>
              <span>{user.currentExperience}</span> xp
            </p>
          </div>
        </main>
        <footer>
          <button onClick={handleSignOut}>SAIR</button>
        </footer>
        <button
          className="close"
          type="button"
          onClick={() => setModalOpen(false)}
        >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Overlay>
  );
}
