import { event } from "./types";

const eventDetailsList = {
    title: "Meet new people… At speed!",
    description: (
        <>
            Befriend someone, maybe even the entire group, as you spend 2
            minutes per person getting to know each other in record time. The
            format is similar to speed dating only you’re speed… friending? We
            will provide the question which you will see on screen long with the
            person you are paired with. When your time is up you will be placed
            with a new person and so on...
        </>
    ),
    price: 0,
    location: "Wilkins Terrace",
};

export const eventsList: event[] = [
    {
        id: "1",
        name: "Speed Friending",
        date: "2022-02-14T18:25:43.511Z",
        details: eventDetailsList,
    },
    {
        id: "2",
        name: "Reading Week Meetup",
        date: "2022-02-15T18:25:43.511Z",
        details: eventDetailsList,
    },
    {
        id: "3",
        name: "UCL Social",
        date: "2022-02-16T18:25:43.511Z",
        details: eventDetailsList,
    },
    {
        id: "4",
        name: "Fresher's Night",
        date: "2022-02-20T18:25:43.511Z",
        details: eventDetailsList,
    },
    {
        id: "5",
        name: "Campus Tour",
        date: "2022-02-20T18:25:43.511Z",
        details: eventDetailsList,
    },
    {
        id: "6",
        name: "International Students Meetup",
        date: "2022-02-22T18:25:43.511Z",
        details: eventDetailsList,
    },
];
