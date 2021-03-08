import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/49520658?s=400&u=1da9b89af158225a9abbf27b509686bccab64e1f&v=4"
        alt="Imagem de Perfil"
      />
      <div>
        <strong>Avner José</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
