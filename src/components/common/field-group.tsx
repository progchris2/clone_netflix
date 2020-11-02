import React from 'react';
import { Field, Label, GroupControlField } from './ui';

interface IFieldGroup {
    type: string;
    id: string;
    checked: boolean;
    handleChange: (args: {
        preventDefault: () => void;
        target: { name: any; value: any };
    }) => void;
}

const FieldGroup = ({ type, id, handleChange, checked }: IFieldGroup) => {
    return (
        <GroupControlField>
            <Label htmlFor={id}>Se souvenir de moi</Label>
            <Field
                type={type}
                id={id}
                name="memory"
                checked={checked}
                onChange={handleChange}
            />
        </GroupControlField>
    );
};

export default FieldGroup;
