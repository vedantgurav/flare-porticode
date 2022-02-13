import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
    flareShapes,
    flareColors,
    flareColorsHex,
} from "../../../../data/flares";
import { personGroups, personsList } from "../../../../data/persons";
import { rooms } from "../../../../data/roomInterests";
import { addFriend } from "../../../../functions/api";

const Shapes: NextPage = () => {
    const router = useRouter();
    const { roomid = 0, shapeid = 0 } = router.query;
    const room = rooms.filter((room) => {
        return room?.id === roomid;
    })[0];
    const interest = room?.interestList.filter((interest) => {
        return interest?.id === shapeid;
    })[0];
    const [selectionList, setSelectionList] = useState<string[]>([]);
    const [showParticipants, setShowParticipants] = useState(false);
    const [shape, setShape] = useState(
        parseInt(`${interest?.id}`.charAt(0)) ?? 0
    );
    const [color, setColor] = useState(
        parseInt(`${interest?.id}`.charAt(1)) ?? 0
    );

    const personsList = personGroups[shape === 0 ? 0 : 1];

    const toggleSelection = (id: string) => {
        // console.log(selectionList, id, selectionList.includes(id));
        if (selectionList.includes(id)) {
            setSelectionList(
                selectionList.filter((selectedId) => selectedId != id)
            );
            return;
        }
        setSelectionList([...selectionList, id]);
        addFriend("");
    };

    const toggleParticipants = () => {
        setShowParticipants(!showParticipants);
    };

    if (!room) return <></>;

    return (
        <div
            className={`relative h-screen overflow-hidden ${flareColors[color]}`}
            onClick={() => {
                if (process.env.NODE_ENV === "development" && false)
                    setColor((color + 1) % flareColors.length);
            }}
        >
            <Head>
                <title>Flare — Shapes</title>
                <meta name="description" content="Flare — Shapes" />
                <meta name="theme-color" content={flareColorsHex[color]} />
            </Head>

            <main className="flex h-full flex-col items-center justify-between pt-6">
                <button
                    className="ml-4 flex h-12 w-12 items-center justify-center self-start rounded-xl bg-gray-900 bg-opacity-60"
                    onClick={() => router.back()}
                >
                    <svg
                        className="h-10 w-10"
                        fill={flareColorsHex[color]}
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

                <h1 className="px-4 py-4 text-3xl font-bold text-white">
                    {interest.name}
                </h1>
                <div
                    className="flex w-full flex-grow animate-pulse flex-col justify-center pb-72"
                    onClick={() => {
                        if (process.env.NODE_ENV === "development" && false)
                            setShape((shape + 1) % flareShapes.length);
                    }}
                >
                    {flareShapes[shape]}
                </div>
                <div
                    className={`absolute inset-x-0 top-full transform transition-all ${
                        showParticipants
                            ? "h-[90vh -translate-y-full px-2"
                            : "-translate-y-24 px-4"
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
                                        key={person?.id}
                                        className="flex items-center border-b px-2 py-3"
                                        onClick={() =>
                                            toggleSelection(person?.id)
                                        }
                                    >
                                        <div className="mr-4 h-10 w-10 rounded-full bg-gray-100"></div>
                                        <p className="flex-grow">
                                            {person.name}
                                        </p>
                                        <div className="">
                                            {selectionList.includes(
                                                person?.id
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

export default Shapes;
