import React, { useState } from 'react';

const Aray = () => {
    const initialArray = [1, 2, 3, 4, 5, 6];  // Initial array values
    let [val, setVal] = useState(initialArray);

    const handleClearOrReset = () => {
        if (val.length > 0) {
            // Remove the last element when there are still numbers left
            setVal((prevVal) => prevVal.filter((_, index) => index !== prevVal.length - 1));
        } else {
            // Reset to the initial array when all numbers are deleted
            setVal(initialArray);
        }
    };

    return (
        <div>
            <div className="main p-8">
                {val.length > 0 ? (
                    val.map((item, index) => <h1 key={index}>{item}</h1>)
                ) : (
                    <h1>All numbers are deleted!</h1>
                )}

                <button 
                    onClick={handleClearOrReset} 
                    className={`px-4 py-2 ${val.length >0 ? "bg-red-300" :"bg-green-300"} rounded-xl mt-4`}>
                    {val.length > 0 ? 'Clear' : 'Reset'}
                </button>
            </div>
        </div>
    );
};

export default Aray;
