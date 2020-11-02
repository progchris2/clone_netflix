import React from 'react';
import Icons from '../../../common/icons';

const SubItems = () => {
    return (
        <div>
            <div className="sub-items-fbk">
                <span>
                    <Icons color="#0f9bf6" size="14" />
                </span>
                <span>Se connecter avec facebook</span>
            </div>
            <p className="sub-items-sign-up">
                <span>Nouveau sur Netflix?</span>{' '}
                <span>S&apos;inscrire maintenant</span>
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
