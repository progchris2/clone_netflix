import { useCallback, useReducer } from 'react';
import { initStateSign } from '../../constantes';
import { IAction, IStateSign } from '../../config/utils/interfaces.util';
import { signEnum } from '../../config/enums/index.enum';

const getReducers = (state: IStateSign, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case signEnum[signEnum.error_field]:
            return Object.assign({}, state, { error: payload });
        case signEnum[signEnum.add_field]:
            return Object.assign({}, state, payload);
        default:
            return state;
    }
};

const useManagementSign = () => {
    const [state, dispatch] = useReducer(getReducers, initStateSign);

    return {
        state,
        dispatch,
        updateField: useCallback(
            (e) => {
                if (e.target.value) {
                    if (e.target.value.length <= 3) {
                        dispatch({
                            type: signEnum[signEnum.error_field],
                            payload: signEnum.errorField,
                        });
                        return;
                    } else {
                        dispatch({
                            type: signEnum[signEnum.add_field],
                            payload: {
                                [e.target.name]:
                                    e.target.value || e.target.checked,
                                error: '',
                            },
                        });
                    }
                }
            },
            [state],
        ),
        __handleSubmit: useCallback(() => {
            console.log(state);
        }, []),
    };
};

export default useManagementSign;
