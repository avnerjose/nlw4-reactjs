import styled from "styled-components";

export const Container = styled.tr`
  margin-bottom: 1rem;

  td {
    background: #fff;

    &:first-child {
      border-radius: 0.5rem 0 0 0.5rem;
    }
    &:last-child {
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }

  td.userInfo {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    h4 {
      color: var(--title);
    }
    .avatar {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      margin-right: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: start;

      img {
        margin-right: 0.5rem;
      }
    }
  }

  td:first-child {
    text-align: center;
    width: 5%;
    font-weight: bold;
    border-right: 0.25rem var(--background) solid;
  }

  span {
    color: var(--blue);
    font-weight: bold;
  }

  @media (max-width: 720px) {
    td.userInfo {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 1rem;

      .avatar {
        margin-right: 0;
      }

      div {
        display: flex;
        flex-direction: column;
        text-align: start;

        img {
          margin-right: 0.5rem;
        }
      }
    }
    td > p {
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
`;
