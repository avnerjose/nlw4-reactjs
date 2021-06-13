import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: var(--white);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  position: relative;
  text-align: center;

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }

  button.close {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0px;
  }
  header {
    display: flex;
    width: 100%;
    > img {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      p {
        font-size: 1rem;
        margin-top: 0.5rem;

        img {
          margin-right: 0.5rem;
        }
      }
    }
  }

  main {
    width: 100%;
    margin-top: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-left: 0;
      position: relative;
      border-bottom: 1px solid var(--gray-line);
      padding-bottom: 0.5rem;

      &:first-child {
        margin-bottom: 1rem;
      }
    }

    h3 {
      font-size: 1.5rem;
      color: var(--text);
      opacity: 0.5;
    }

    p {
      font-size: 1.25rem;
      color: var(--text);

      span {
        color: var(--blue);
      }
    }
  }

  footer {
    width: 100%;
    button {
      padding: 1rem;
      border: none;
      width: 100%;
      color: var(--white);
      background: var(--red);
      margin-top: 1.5rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
