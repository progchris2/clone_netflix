import React from 'react';
import { useRecoilValue } from 'recoil';

import './App.css';
import { LayoutContainer, SignApp } from '../components';
import { signEnum } from '../config/enums/index.enum';
import sign from '../components/sign/sign.model.json';
import { useStateSign } from '../services/recoil';

const App = (): JSX.Element => {
    const { isConnected, isSignedIn } = useRecoilValue(useStateSign);
    const index = isSignedIn
        ? signEnum[signEnum.signIn]
        : signEnum[signEnum.signUp];
    // @ts-ignore
    const data = sign[index];

    return (
        <LayoutContainer>
            {isConnected ? (
                'cool'
            ) : (
                <SignApp data={data} typeForm={isSignedIn} />
            )}
        </LayoutContainer>
    );
};

export default App;
