import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { eventsList } from "../../data/events";

const Home: NextPage = () => {
    const router = useRouter();
    const { eventid } = router.query;
    const [rsvp, setRsvp] = useState(false);
    const event = eventsList.filter((event) => {
        return eventid === event.id;
    })[0];
    const [menu, setMenu] = useState(false);
    const [themeColor, setThemeColor] = useState("#111827");

    const toggleMenu = () => {
        setThemeColor(menu ? "#111827" : "#ffffff");
        setMenu(!menu);
    };

    if (!event) return <></>;

    return (
        <div className="relative mx-auto max-w-lg overflow-hidden">
            <Head>
                <meta name="theme-color" content={themeColor} />;
            </Head>

            <div className="flex h-screen flex-col">
                <header className="relative flex items-center border-b-[6px] border-cyan-600 bg-gray-900 py-2">
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
                <main className="relative flex-grow overflow-scroll bg-white px-6 pt-6 pb-16">
                    <button
                        className="-ml-3 flex h-12 w-12 items-center justify-center rounded-xl"
                        onClick={() => router.back()}
                    >
                        <svg
                            className="h-10 w-10"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <h1 className="py-2 text-3xl font-bold text-gray-900">
                        {event.name}
                    </h1>
                    {/* <h2 className="mt-4 mb-2 text-lg font-semibold text-gray-900">
                        {event.details.title}
                    </h2> */}
                    <p className="text-gray-700">{event.details.description}</p>

                    <h3 className="mt-8 mb-2 text-lg font-semibold text-gray-900">
                        Schedule
                    </h3>
                    <div className="grid grid-cols-2 ">
                        <div className="flex items-center">
                            <svg
                                className="mr-2 h-6 w-6 text-cyan-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            {new Date(event.date).toDateString().slice(0, -5)}
                        </div>
                        <div className="flex items-center">
                            <svg
                                className="mr-2 h-6 w-6 text-cyan-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                />
                            </svg>
                            {event.details.price ? event.details.price : "Free"}
                        </div>
                        <div className="mt-3 flex items-center">
                            <svg
                                className="mr-2 h-6 w-6 text-cyan-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {new Date(event.date).toTimeString().slice(0, 5)}
                        </div>
                        <div className="mt-3 flex items-center">
                            <svg
                                className="mr-2 h-6 w-6 text-cyan-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            {event.details.location}
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 grid w-full grid-cols-2 justify-center space-x-4 px-6 pb-16">
                        <button
                            className={`rounded-lg border-2 border-gray-900 px-4 py-3 text-center text-xl font-medium text-gray-900 ${
                                rsvp ? "" : ""
                            }`}
                            onClick={() => setRsvp(!rsvp)}
                        >
                            {rsvp ? "Cancel" : "RSVP"}
                        </button>

                        <Link href={`/room/${eventid}`}>
                            <a className="rounded-lg border-2 border-cyan-500 bg-cyan-500 px-4 py-3 text-center text-xl font-medium text-white">
                                Join
                            </a>
                        </Link>
                    </div>
                </main>
                <div
                    className={`absolute inset-0 mx-auto flex h-screen w-screen max-w-lg flex-col justify-between bg-white px-6 py-16 transition ${
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
        </div>
    );
};

export default Home;
