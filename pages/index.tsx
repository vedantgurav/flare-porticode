import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { eventsList } from "../data/events";

const Home: NextPage = () => {
    const [menu, setMenu] = useState(false);
    const [themeColor, setThemeColor] = useState("#111827");

    const toggleMenu = () => {
        setThemeColor(menu ? "#111827" : "#ffffff");
        setMenu(!menu);
    };

    return (
        <div className="relative mx-auto max-w-lg overflow-hidden">
            <Head>
                <title>Flare</title>
                <meta name="description" content="Flare — Porticode 5.0" />
                <link rel="icon" href="/icons/favicon.ico" />
                <meta name="theme-color" content={themeColor} />;
            </Head>

            <div className="flex h-screen max-w-lg flex-col">
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
                    UCL Events For You
                </h1>
                <main className="flex-grow overflow-scroll bg-white px-6 pt-6 pb-32">
                    {eventsList.map((event) => {
                        const date = new Date(event.date);
                        return (
                            <Link key={event.id} href={`/event/${event.id}`}>
                                <a className="block border-b bg-white py-4">
                                    <div className="flex justify-between">
                                        <p className="text-xl font-semibold">
                                            {event.name}
                                        </p>
                                        <svg
                                            className="h-6 w-6 text-gray-900"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-semibold text-gray-400">
                                        {date.getDate()}/
                                        {("0" + (date.getMonth() + 1)).slice(
                                            -2
                                        )}
                                    </p>
                                </a>
                            </Link>
                        );
                    })}
                </main>
                <div className="absolute inset-x-0 bottom-0 mx-auto flex w-full max-w-lg justify-center border-t bg-white pb-10 pt-6">
                    <Link href="/room/1">
                        <a className="rounded-lg bg-cyan-500 px-4 py-3 text-2xl font-bold text-white">
                            Join a Room
                        </a>
                    </Link>
                </div>
                <div
                    className={`absolute inset-0 mx-auto flex h-screen w-full max-w-lg flex-col justify-between bg-white px-6 py-16 transition ${
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
                    <div className="mx-auto mt-10 h-20 w-20">
                        <Image
                            width={1804}
                            height={1742}
                            src="/photos/gesture.jpg"
                            alt="Gesture"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
