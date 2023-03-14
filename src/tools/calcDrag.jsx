import React, { useState, useRef } from 'react';

function DragOverlay() {
    const [dragStart, setDragStart] = useState(null);
    const overlayRef = useRef(null);

    function handleMouseDown(e) {
        setDragStart({ x: e.clientX, y: e.clientY });
        window.addEventListener('mouseup', handleMouseUp);
    }
    function handleMouseUp(e) {
        if (dragStart) {
            const { x: startX, y: startY } = dragStart;
            const { clientX: endX, clientY: endY } = e;
            const { offsetWidth: width, offsetHeight: height } = overlayRef.current;
            const x = (endX - startX) / width;
            const y = (endY - startY) / height;
            console.log('Drag value:', x, y);
            setDragStart(null);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }
    return (
        <div
            id="overlay"
            ref={overlayRef}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            onMouseDown={handleMouseDown}
        />
    );
}
