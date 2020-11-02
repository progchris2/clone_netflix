import React from 'react';
import Icons from '../../../common/icons';
import { useSetRecoilState } from 'recoil';
import { useStateSign } from '../../../../services/recoil';

const SubItems = ({ type }: { type: boolean }) => {
    // @ts-ignore
    const setTypeSign = useSetRecoilState(useStateSign);

    const handleClick = function () {
        setTypeSign((s) => ({ ...s, isSignedIn: !s.isSignedIn }));
    };

    return (
        <div>
            <div className="sub-items-fbk">
                <span>
                    <Icons color="#0f9bf6" size="14" />
                </span>
                <span>Se connecter avec facebook</span>
            </div>
            <p className="sub-items-sign-up">
                <span>{type ? 'Nouveau sur Netflix?' : 'Déjà membre'}</span>{' '}
                <span onClick={handleClick}>
                    S&apos; {type ? 'inscrire maintenant' : 'identifier'}
                </span>
            </p>
            <p className="sub-items-learn">
                <span>Cette page est protégé par Google, </span>
                {'  '}
                <span>
                    <a href="#">apprendre plus</a>
                </span>
            </p>
        </div>
    );
};

export default SubItems;
