import React from 'react';
import { useRecoilValue } from 'recoil';

import './App.css';
import { LayoutContainer, SignApp } from '../components';
import { signEnum } from '../config/enums/index.enum';
import sign from '../components/sign/sign.model.json';
import { getStatusConnection } from '../services/recoil/atoms/connected.atom';


const App = (): JSX.Element => {
    const index = signEnum[signEnum.signIn];
    // @ts-ignore
    const data = sign[index];
    const { isConnected } = useRecoilValue(getStatusConnection);

    return (
        <LayoutContainer>
            {!isConnected ? <SignApp data={data} typeForm="signIn" /> : 'cool'}
        </LayoutContainer>
    );
};

export default App;
