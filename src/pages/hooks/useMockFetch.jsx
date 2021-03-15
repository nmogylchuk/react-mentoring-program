import React, {useEffect, useState} from 'react';

const useMockFetch = (mockData, mockedDataId) => {

    const [response, setResponse] = useState([]);

    useEffect(() => {
            try {
                const res = setTimeout(() => {
                    if (mockedDataId) {
                        setResponse(mockData.data.find(mockedItem => mockedItem.id === mockedDataId));
                    } else {
                        setResponse(mockData);
                    }
                }, 200);
                return () => {
                    clearTimeout(res);
                }
            } catch (e) {
                console.error(e);
            }
        },
        [mockedDataId])

    return response;

};

export default useMockFetch;
