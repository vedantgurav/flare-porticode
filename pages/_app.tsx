import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-lg">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
