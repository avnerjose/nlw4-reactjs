import styled from "styled-components";

export const Container = styled.div`
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
