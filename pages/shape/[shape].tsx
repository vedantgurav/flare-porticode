import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { roomInterests } from "../data/roomInterests";

const Interests: NextPage = () => {
    const router = useRouter();
    const { roomid } = router.query;
    const [selectionList, setSelectionList] = useState<string[]>([]);

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

    useEffect(() => {
        setSelectionList([]);
    }, []);

    return (
        <div className="h-screen bg-gray-900 px-4 pb-16">
            <Head>
                <title>Shapes — Room</title>
                <meta name="description" content="Shapes for Porticode" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex h-full flex-col items-center justify-between pt-6">
                <div className="flex w-full flex-grow flex-col justify-center overflow-y-scroll">
                    {roomInterests.interestList.map((interest, index) => {
                        return (
                            <div key={index} className="flex justify-center">
                                <div
                                    className={`relative my-2 flex rounded-lg border-2  border-gray-300 py-2 text-center text-lg transition-all ${
                                        selectionList.includes(interest.id)
                                            ? "bg-gray-300 pl-6 pr-2 text-gray-700"
                                            : "px-6 text-gray-300"
                                    }`}
                                    onClick={() => toggleSelection(interest.id)}
                                >
                                    <p className="">{interest.name}</p>
                                    <svg
                                        className={`h-6 text-gray-900 transition-all ${
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
                <div className="mt-4 flex w-full justify-center">
                    <Link href="shape">
                        <a className="mx-auto flex h-14 w-1/3 items-center justify-center rounded-lg border-2 border-gray-100 text-xl text-gray-100">
                            Random
                        </a>
                    </Link>
                    <Link href="shape">
                        <a className="mx-auto flex h-14 w-1/3 items-center justify-center rounded-lg border-2 border-gray-100 bg-white text-xl">
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
