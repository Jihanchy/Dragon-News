import React from 'react';

const Loading = () => {
    return (
        <div className="flex w-10/12 items-center min-h-screen mx-auto flex-col gap-4">
            <div className="skeleton h-56 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    );
};

export default Loading;