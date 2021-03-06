export type interest = {
    id: string;
    name: string;
};

export interface flare extends interest {
    shape: number;
    color: number;
    persons: person[];
}

export type interestList = interest[];

export type roomInterestList = {
    id: string;
    interestList: interestList;
};

export type person = {
    id: string;
    name: string;
    image?: string;
    headline?: string;
};

export type event = {
    id: string;
    name: string;
    date: string;
    details: eventDetail;
};

export type eventDetail = {
    title: string;
    description: JSX.Element | string;
    price: number;
    location: string;
};
