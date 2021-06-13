import GlobalStyles from "../styles/global";
import { NavBar } from "../components/NavBar";
import { Provider, useSession } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingAnimation } from "../components/LoadingAnimation";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <GlobalStyles />
      {Component.requireAuth ? (
        <AuthHandler>
          <NavBar />
          <Component {...pageProps} />
        </AuthHandler>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
}

function AuthHandler({ children }: { children: any }) {
  const [session, loading] = useSession();
  const isUser = !!session?.user;
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!isUser) {
      router.push("/login");
    }
  }, [isUser, loading]);

  if (isUser) {
    return children;
  }

  return <LoadingAnimation />;
}

export default MyApp;
