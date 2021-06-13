import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import {
  Container,
  LateralLink,
  LateralActiveLink,
  Logo,
} from "../styles/components/NabBar";

interface NavLinkProps {
  href: string;
  icon: string;
  active: boolean;
}

function NavLink({ active, icon, href }: NavLinkProps) {
  return (
    <>
      {active ? (
        <LateralActiveLink>
          <Link href={href}>
            <div className="link">
              <img src={`icons/${icon}.svg`} alt="" />
            </div>
          </Link>
        </LateralActiveLink>
      ) : (
        <LateralLink>
          <Link href={href}>
            <div className="link">
              <img src={`icons/${icon}-grey.svg`} alt="" />
            </div>
          </Link>
        </LateralLink>
      )}
    </>
  );
}

export function NavBar() {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });
  return (
    <Container>
      {!isMobile && <Logo src="icons/logo.svg" alt="Logo" />}
      <ul>
        <NavLink href="/" icon="home" active={router.pathname === "/"} />
        <NavLink
          href="/leaderboard"
          icon="award"
          active={router.pathname === "/leaderboard"}
        />
      </ul>
    </Container>
  );
}
