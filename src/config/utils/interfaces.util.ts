export interface ISign {
    name: string;
    type: string;
    value: string;
    placeholder: string;
}

export interface ISignApp {
    data: ISign[];
    typeForm: boolean;
}

export interface IStateSign {
    memory: boolean;
    identifiant: string;
    password: string;
    error: string;
    isError: boolean;
}

export interface IAction {
    type: string;
    payload: any;
}

export interface IItemsField {
    handleChange: (args: any) => void;
    name: string;
    type: string;
    error: boolean;
    placeholder: string;
    errorMsg: string;
}
