import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError()
    return (
        <div>
            404
        </div>
    );
};

export default NotFound;