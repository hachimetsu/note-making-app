
import { useState, useEffect } from 'react';

export const useMouseDrag = () => {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [elementRef, setElementRef] = useState(null);

    const handleMouseMove = (event) => {
        setCurrentPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        if (elementRef) {
            elementRef.addEventListener('mousemove', handleMouseMove);
            return () => {
                elementRef.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [elementRef]);

    return { currentPosition, setElementRef };
};
