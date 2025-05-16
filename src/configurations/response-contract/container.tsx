import { Dispatch, SetStateAction, useState } from "react";
import { IResponseContract } from "./type";
    
export function useResponseContract<T>(
    initialIsLoading: boolean = false
): [
        IResponseContract<T>,
        Dispatch<SetStateAction<IResponseContract<T>>>,
        () => void
    ] {

    const [state, setState] = useState<IResponseContract<T>>({
        isLoading: initialIsLoading,
        data: null,
        error: false,
    });

    const resetState = () => {
        setState({
            isLoading: false,
            data: null,
            error: false,
        });
    };

    return [state, setState, resetState];
}