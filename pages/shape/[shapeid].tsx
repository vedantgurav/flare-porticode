import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { flareShapes, flareColors } from "../data/flares";
import { personsList } from "../data/persons";
import { roomInterests } from "../data/roomInterests";

const Interests: NextPage = () => {
    const router = useRouter();
    // const { roomid } = router.query;
    const [selectionList, setSelectionList] = useState<string[]>([]);
    const [showParticipants, setShowParticipants] = useState(false);

    const toggleSelection = (id: string) => {
        console.log(selectionList, id, selectionList.includes(id));
        if (selectionList.includes(id)) {
            setSelectionList(
                selectionList.filter((selectedId) => selectedId != id)
            );
            return;
        }
        setSelectionList([...selectionList, id]);
    };

    const toggleParticipants = () => {
        setShowParticipants(!showParticipants);
    };

    // useEffect(() => {}, []);

    return (
        <div className={`relative h-screen overflow-hidden ${flareColors[5]}`}>
            <Head>
                <title>Shapes — Flare</title>
                <meta name="description" content="Shapes for Porticode" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex h-full flex-col items-center justify-between pt-6">
                <div className="flex w-full flex-grow animate-pulse flex-col justify-center pb-48">
                    {flareShapes[0]}
                </div>
                <div
                    className={`absolute inset-x-0 top-full transform px-2 transition-all ${
                        showParticipants
                            ? "h-[90vh -translate-y-full"
                            : "-translate-y-24"
                    }`}
                >
                    <div className="rounded-t-lg bg-white px-4 pb-4">
                        <div
                            className="h-8 w-full py-6"
                            onClick={toggleParticipants}
                        >
                            <div
                                className="mx-auto h-2 w-16 rounded-full bg-gray-400"
                                onClick={toggleParticipants}
                            ></div>
                        </div>
                        <p className="text-xl font-bold">Participants</p>
                        <div className="mt-10 h-full overflow-scroll">
                            {personsList.map((person) => {
                                return (
                                    <div
                                        key={person.id}
                                        className="flex items-center  border-b px-2 py-3"
                                        onClick={() =>
                                            toggleSelection(person.id)
                                        }
                                    >
                                        <div className="mr-4 h-10 w-10 rounded-full bg-gray-100"></div>
                                        <p className="flex-grow">
                                            {person.name}
                                        </p>
                                        <div className="">
                                            {selectionList.includes(
                                                person.id
                                            ) ? (
                                                <svg
                                                    className="h-6 w-6 text-green-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            ) : (
                                                <svg
                                                    className="h-6 w-6 text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Interests;
