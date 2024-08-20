"use client"
import React, { useState } from 'react';

export const ReadMore = ({ children, maxCharacterCount = 100 }) => {
    const text = children;
    const [isExpanded, setIsExpanded] = useState(false);

    if (text?.length <= maxCharacterCount) {
        return <span>{text}</span>;
    }

    return (
        <div>
        {isExpanded ? text : `${text?.substring(0, maxCharacterCount)}...`}
        <button onClick={() => setIsExpanded(!isExpanded)} style={{ marginLeft: 5, color: 'black', cursor: 'pointer', background: 'none', border: 'none' }} className='font-medium text-[16px] md:text-[18px] leading-[24.3px] hover:underline'>
            {isExpanded ? 'See Less' : 'See More'}
        </button>
    </div>

    );
};
