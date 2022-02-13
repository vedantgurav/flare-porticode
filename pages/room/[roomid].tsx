import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { rooms } from "../../data/roomInterests";

const Interests: NextPage = () => {
    const router = useRouter();
    const { roomid } = router.query;
    const [selectionList, setSelectionList] = useState<string[]>([]);
    const room = rooms.filter((room) => {
        return room.id == roomid;
    })[0];
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

    const getRandom = () => {
        let shape = Math.floor(Math.random() * 2);
        let color = Math.floor(Math.random() * 5);
        return `${shape}${color}`;
    };

    const getTopic = () => {
        if (selectionList.length === 1) return selectionList[0];
        return selectionList[Math.floor(Math.random() * 2)];
    };

    return (
        <div className="h-screen bg-white px-4 pb-16">
            <Head>
                <title>Flare — Room</title>
                <meta name="description" content="Flare — Rooms" />
            </Head>

            <main className="flex h-full flex-col items-center justify-between pt-6">
                <button
                    className="flex h-12 w-12 items-center justify-center self-start rounded-xl "
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
                <h1 className="px-4 py-4 text-3xl font-bold text-gray-900">
                    Select a topic of your interest
                </h1>
                <div className="flex w-full flex-grow flex-col justify-center overflow-y-scroll pb-8">
                    {room.interestList.map((interest, index) => {
                        return (
                            <div
                                key={interest.id}
                                className="flex justify-center"
                            >
                                <div
                                    className={`relative my-2 flex cursor-pointer items-center rounded-lg border-2 border-gray-900 py-2 text-center text-lg transition-all ${
                                        selectionList.includes(interest.id)
                                            ? "bg-gray-900 pl-6 pr-2 text-white"
                                            : "px-6 text-gray-900"
                                    }`}
                                    onClick={() => toggleSelection(interest.id)}
                                >
                                    <p className="font-medium">
                                        {interest.name}
                                    </p>
                                    <svg
                                        className={`h-6 text-white transition-all ${
                                            selectionList.includes(interest.id)
                                                ? "ml-3 w-6"
                                                : "w-0"
                                        }`}
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
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="grid w-full grid-cols-2 justify-center space-x-4 border-t border-gray-900 pt-8">
                    <Link href={`/room/${roomid}/shape/${getRandom()}`}>
                        <a className="flex items-center justify-center rounded-lg border-2 border-gray-900 py-3 text-xl font-medium text-gray-900">
                            Random
                        </a>
                    </Link>
                    <Link href={`/room/${roomid}/shape/${getTopic()}`}>
                        <a
                            className={`flex items-center justify-center rounded-lg border-2 border-cyan-500 bg-cyan-500 py-3 text-xl font-semibold text-white transition-opacity ${
                                selectionList.length
                                    ? ""
                                    : "pointer-events-none opacity-50"
                            }`}
                        >
                            Go
                        </a>
                    </Link>
                </div>
            </main>

            <footer></footer>
        </div>
    );
};

export default Interests;
