import React from 'react';
import { useSelector } from 'react-redux'

const Box = () => {
    const count = useSelector(state=>state.count)
    return (
        <div>
            <h3>자식 컴포넌트 : {count}</h3>
        </div>
    );
};

export default Box;