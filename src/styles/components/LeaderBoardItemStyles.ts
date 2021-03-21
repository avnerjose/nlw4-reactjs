import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  padding-right: 3rem;
  display: flex;
  margin-bottom: 0.5rem;

  div.userInfo {
    display: flex;
    align-items: center;
    width: 80%;
    padding: 1rem 1.5rem;
  }
  :first-child {
    margin-top: 1rem;
  }
  div.userInfo div {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  div.position {
    width: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 0.25rem var(--background) solid;
  }

  img.Avatar {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  div:last-child {
    display: flex;
  }

  p {
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  p img {
    margin-right: 0.25rem;
  }

  span.blueText {
    color: var(--blue);
    margin: 0 0.5rem;
  }

  p:first-child {
    margin: 0 4rem;
  }
`;
