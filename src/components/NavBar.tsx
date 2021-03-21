import Link from "next/link";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  icon: string;
}
function NavLink(props: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  function CheckActiveLink() {
    if (router.pathname === props.href) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  useEffect(() => {
    CheckActiveLink();
  }, [isActive]);

  return (
    <>
      {isActive ? (
        <LateralActiveLink>
          <Link href={props.href}>
            <div className="link">
            <img src={`icons/${props.icon}.svg`} alt="" />
            </div>
          </Link>
        </LateralActiveLink>
      ) : (
        <LateralLink>
          <Link href={props.href}>
            <div className="link">
              <img src={`icons/${props.icon}-grey.svg`} alt="" />
            </div>
          </Link>
        </LateralLink>
      )}
    </>
  );
}

export default function NavBar() {
  return (
    <Container>
      <img
        style={{ position: "absolute", top: "2rem" }}
        src="icons/logo.svg"
        alt=""
      />
      <ul>
        <NavLink href="/" icon="home" />
        <NavLink href="/leaderboard" icon="award" />
      </ul>
    </Container>
  );
}

const Container = styled.nav`
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
`;

const LateralLink = styled.li`
  height: 3.5rem;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  position: relative;

  .link{  
    width: 100%;
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LateralActiveLink = styled(LateralLink)`
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
`;
