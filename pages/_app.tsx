import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-gray-900">
            <Head>
                <meta name="application-name" content="Flare" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                />
                <meta name="apple-mobile-web-app-title" content="Flare" />
                <meta name="description" content="Flare — Porticode 5.0" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#111827" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180x180.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="512x512"
                    href="/icon-512x512.png"
                />

                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="twitter:title" content="Flare" />
                <meta
                    name="twitter:description"
                    content="Flare — Porticode 5.0"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Flare" />
                <meta
                    property="og:description"
                    content="Flare — Porticode 5.0"
                />
                <meta property="og:site_name" content="Flare" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=fit"
                />
            </Head>

            <div className="mx-auto max-w-lg">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
