import { atom, GetRecoilValue, selector } from 'recoil';

interface IGetStatusConnection {
    isConnected: boolean;
}

const verifyIsConnected = atom({
    key: 'verify-if-connect',
    default: {
        isConnected: false,
    },
});

export const getStatusConnection = selector({
    key: 'verifyIsConnected',
    get: ({ get }: { get: GetRecoilValue }): IGetStatusConnection => {
        const status = get(verifyIsConnected);
        console.log(status);
        return status;
    },
});
