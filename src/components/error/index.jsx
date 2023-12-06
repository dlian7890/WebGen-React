import React from 'react';
import { useRouteError } from 'react-router-dom';

const index = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <main className='error'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </main>
    );
};

export default index;
