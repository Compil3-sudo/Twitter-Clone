import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter Clone</title>
        <meta
          name="description"
          content="This is a Twitter Clone by Compil3 learning from Web Dev Simplified"
        />
        <link
          rel="icon"
          type="image/png"
          href="/rares_favicon/light/rares_favicon-light-16x16.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          href="/rares_favicon/dark/rares_favicon-dark-16x16.png"
          media="(prefers-color-scheme: light)"
        />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
