import React from 'react';

import './index.css';
import { Button } from '../../common';
import { Colors, signEnum } from '../../../config/enums/index.enum';
import { FieldGroup } from '../../index';
import SubItems from './items/subItems';
import { ISign, ISignApp } from '../../../config/utils/interfaces.util';
import useManagementSign from '../../../services/hooks/managementSign';
import { RenderItemsFields } from './items/itemsFields';
import { uniqueElement } from '../../../config/utils/helpers.util';

const SignApp = ({ data, typeForm }: ISignApp) => {
    const { state, updateField, __handleSubmit } = useManagementSign();

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        __handleSubmit();
    };

    const handleChange = (e: {
        preventDefault: () => void;
        target: { name: string; value?: string; checked?: boolean };
    }) => {
        e.preventDefault();
        updateField(e);
    };

    const getTitle = () => (typeForm ? 'identifier' : 'enregister');

    return (
        <div className="sign-app">
            <form className="form" onSubmit={handleSubmit}>
                <h2>S&apos;{getTitle()}</h2>
                {data.map((item: ISign) => (
                    <RenderItemsFields
                        key={uniqueElement()}
                        handleChange={handleChange}
                        name={item.name}
                        type={item.type}
                        error={state.isError}
                        errorMsg={state.error}
                        placeholder={item.placeholder}
                    />
                ))}
                <Button color={Colors.red}>
                    {typeForm ? signEnum.login : signEnum.logout}
                </Button>
                <div className="sub-items">
                    {typeForm && (
                        <FieldGroup
                            handleChange={handleChange}
                            type="checkbox"
                            id="remember"
                            checked={state.memory}
                        />
                    )}
                    <SubItems type={typeForm} />
                </div>
            </form>
        </div>
    );
};

export default SignApp;
