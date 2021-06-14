import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;

  @media(max-width: 720px){
    overflow-y: inherit;
  }
`;

export const Content = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2rem 0rem;

  header {
    h1 {
      color: var(--title);
    }
  }
  @media (max-width: 720px) {
    height: 100%;
    padding: 2rem 1rem 4rem 1rem;
  }
`;

export const LeaderBoardTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  th {
    text-align: start;
    font-size: 0.8rem;
    color: var(--text);
    opacity: 0.5;
  }

  thead {
    height: 4rem;
  }
`;
