import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { eventsList } from "../data/events";

const Home: NextPage = () => {
    const [menu, setMenu] = useState(false);
    const [themeColor, setThemeColor] = useState("#111827");
    const linkStyle = "text-2xl my-3 underline";

    const toggleMenu = () => {
        setThemeColor(menu ? "#111827" : "#ffffff");
        setMenu(!menu);
    };

    return (
        <>
            <Head>
                <title>Flare — Credits</title>
                <meta name="theme-color" content={themeColor} />;
            </Head>

            <div className="flex h-screen flex-col">
                <header className="relative flex items-center bg-gray-900 py-2">
                    <button
                        className="mx-2 flex h-12 w-12 items-center justify-center self-start "
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-10 w-10 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <Link href="/">
                        <a className="text-2xl text-white">Flare</a>
                    </Link>
                </header>
                <h1 className="border-b-[6px] border-cyan-600 bg-gray-900 px-4 py-4 text-2xl font-semibold text-white">
                    Credits
                </h1>
                <main className="flex flex-grow flex-col items-center justify-center overflow-scroll bg-white px-6 pt-24 pb-32">
                    <Link href="https://www.vedantgurav.com">
                        <a target="_blank" className={linkStyle}>
                            Vedant Gurav
                        </a>
                    </Link>
                    <Link href="https://ashishgoyal.in">
                        <a target="_blank" className={linkStyle}>
                            Ashish Goyal
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ambikasharma1439/">
                        <a target="_blank" className={linkStyle}>
                            Ambika Sharma
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/mohammad-shoraka">
                        <a target="_blank" className={linkStyle}>
                            Mohammad Shoraka
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/awodele/">
                        <a target="_blank" className={linkStyle}>
                            Adekunle Awodele
                        </a>
                    </Link>
                </main>

                <div
                    className={`absolute inset-0 flex h-screen w-screen flex-col justify-between bg-white px-6 py-16 transition ${
                        menu ? "" : "-translate-x-full"
                    }`}
                    onClick={toggleMenu}
                >
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">Menu</h3>
                        <button className="mx-2 flex h-12 w-12 items-center justify-center self-start">
                            <svg
                                className="h-10 w-10 text-gray-900"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="my-auto space-y-4 justify-self-center text-4xl font-bold">
                        <Link href="/">
                            <a
                                className={`ease block py-2 transition-transform delay-75 duration-300 ${
                                    menu ? "" : "-translate-x-64"
                                }`}
                            >
                                Home
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                className={`ease block py-2 transition-transform delay-100 duration-300 ${
                                    menu ? "" : "-translate-x-64"
                                }`}
                            >
                                Profile
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                className={`ease block py-2 transition-transform delay-150 duration-300 ${
                                    menu ? "" : "-translate-x-64"
                                }`}
                            >
                                Settings
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                className={`ease block py-2 transition-transform delay-200 duration-300 ${
                                    menu ? "" : "-translate-x-64"
                                }`}
                            >
                                Logout
                            </a>
                        </Link>
                    </div>

                    <Link href="/credits">
                        <a
                            className={`ease block py-2 text-4xl font-bold transition-transform delay-300 duration-300 ${
                                menu ? "" : "-translate-x-64"
                            }`}
                        >
                            Credits
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
