import { atom, GetRecoilValue, selector } from 'recoil';

interface IGetStatusConnection {
    isConnected: boolean;
    isSignedIn: boolean;
}

export const useStateSign = atom({
    key: 'verify-if-connect',
    default: {
        isConnected: false,
        isSignedIn: true,
    },
});

export const getStatusConnection = selector({
    key: 'get-status-connection',
    get: ({ get }: { get: GetRecoilValue }): IGetStatusConnection => {
        return <IGetStatusConnection>get(useStateSign);
    },
});
