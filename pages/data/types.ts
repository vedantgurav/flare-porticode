export type interest = {
    id: string;
    name: string;
};

export interface flare extends interest {
    shape: number;
    color: number;
}

export type interestList = interest[];

export type roomInterestList = {
    id: string;
    interestList: interestList;
};