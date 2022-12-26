import React from 'react';

import { ThreeCircles } from 'react-loader-spinner';

export default function Loading() {
    return (
        <div
            className="bottom-0 absolute flex justify-center items-center bg-black bg-opacity-30 z-50
"
        >
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
}
