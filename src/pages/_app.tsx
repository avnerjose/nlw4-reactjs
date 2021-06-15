import GlobalStyles from "../styles/global";
import { NavBar } from "../components/NavBar";
import { Provider, useSession } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingAnimation } from "../components/LoadingAnimation";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#5965e0" />
      </Head>
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
    </>
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
