import React from 'react';
import { ErrorTag } from './ui';

const ErrorMessage = ({ msg }: { msg: string }) => {
    return <ErrorTag>{msg}</ErrorTag>;
};

export default ErrorMessage;
