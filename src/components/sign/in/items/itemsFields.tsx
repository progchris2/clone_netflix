import { Field } from '../../../common';
import ErrorMessage from '../../../common/error';
import React from 'react';
import { IItemsField } from '../../../../config/utils/interfaces.util';

export const RenderItemsFields = ({
    handleChange,
    name,
    type,
    error,
    errorMsg,
    placeholder,
}: IItemsField) => (
    <>
        <Field
            onChange={handleChange}
            name={name}
            type={type}
            error={error}
            placeholder={placeholder}
        />
        <ErrorMessage msg={errorMsg} />
    </>
);
