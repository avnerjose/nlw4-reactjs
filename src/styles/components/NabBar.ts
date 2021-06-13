import styled from "styled-components";

export const Container = styled.nav`
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  padding: 2rem 0;

  ul {
    list-style-type: none;
  }

  @media (max-width: 720px) {
    & {
      position: fixed;
      width: 100%;
      height: auto;
      right: 0;
      top: auto;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0;

      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 2rem;

  @media (max-width: 720px) {
    & {
      top: auto;
      left: 1rem;
      bottom: auto;
    }
  }
`;

export const LateralLink = styled.li`
  height: 3.5rem;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  position: relative;

  .link {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LateralActiveLink = styled(LateralLink)`
  ::before {
    content: "";
    background: var(--blue);
    border-radius: 0 5px 5px 0;
    width: 4px;
    height: 3.5rem;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
  }

  @media (max-width: 720px) {
    ::before {
      right: 0;
      width: auto;
      height: 4px;
      border-radius: 5px 5px 0 0;
    }
  }
`;
