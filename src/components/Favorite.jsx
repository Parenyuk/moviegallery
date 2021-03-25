import React, {useState} from 'react';
import star from './../assets/images/star.svg';
import starWhite from './../assets/images/starwhite.svg';



export const Favorite = () => {
    const [state, setState] = useLocalStorage(false)

    const changeValue = () => {
        setState(!state)
    }

    return (
        <div>
            <div>
                <div value={state} onClick={changeValue} style={{width: '50px'}}>
                    {
                        state
                            ?  <img src={star} height={40} width={40}  />
                            :  <img src={starWhite} height={40} width={40}  />
                    }
                </div>
            </div>

        </div>
    );
}
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue];
}
