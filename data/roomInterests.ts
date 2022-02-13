import { flare, roomInterestList } from "./types";

const interestsA = [
    {
        id: "00",
        name: "Football",
    },
    {
        id: "22",
        name: "Harry Potter",
    },
    {
        id: "11",
        name: "Music",
    },
    {
        id: "13",
        name: "Business",
    },
    { id: "24", name: "International Politics" },
    { id: "15", name: "Muscle Cars" },
];

const interestsB = [
    {
        id: "10",
        name: "Musicals",
    },
    {
        id: "21",
        name: "Video Games",
    },
    {
        id: "12",
        name: "Molecular Gastronomy",
    },
    {
        id: "03",
        name: "Puppies",
    },
];

export const rooms: roomInterestList[] = [
    {
        id: "1",
        interestList: interestsA,
    },
    {
        id: "2",
        interestList: interestsB,
    },
    {
        id: "3",
        interestList: interestsA,
    },
    {
        id: "4",
        interestList: interestsB,
    },
    {
        id: "5",
        interestList: interestsA,
    },
    {
        id: "6",
        interestList: interestsB,
    },
];

export const flareData: flare = {
    id: "374g984r",
    name: "Football",
    shape: 0,
    color: 0,
    persons: [],
};

// { "id": "55678899", "interestList": [{ "id": "6", "name": "Soccer" }, { "id": "7", "name": "Musicals" }, { "id": "8", "name": "Video games" }
