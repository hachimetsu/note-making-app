import React, { useState, useRef, useEffect } from "react";

function useResizableDiv() {
    const [width, setWidth] = useState(320);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(null);
    const workspaceRef = useRef(null);

    const minSidebarWidth = 200;
    const dragStartWidth = width;

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                const diff = e.pageX - dragStartX;
                const newWidth = Math.max(minSidebarWidth, dragStartWidth + diff / 4);
                setWidth(newWidth);
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleMouseLeave = () => {
            setIsDragging(false);
        };

        const handleMouseDown = (e) => {
            setIsDragging(true);
            setDragStartX(e.pageX);
        };

        const workspaceEl = workspaceRef.current;

        workspaceEl.addEventListener("mousemove", handleMouseMove);
        workspaceEl.addEventListener("mouseup", handleMouseUp);
        workspaceEl.addEventListener("mouseleave", handleMouseLeave);
        workspaceEl.addEventListener("mousedown", handleMouseDown);

        return () => {
            workspaceEl.removeEventListener("mousemove", handleMouseMove);
            workspaceEl.removeEventListener("mouseup", handleMouseUp);
            workspaceEl.removeEventListener("mouseleave", handleMouseLeave);
            workspaceEl.removeEventListener("mousedown", handleMouseDown);
        };
    }, [isDragging, dragStartX, minSidebarWidth, dragStartWidth]);

    return {
        width,
        workspaceRef,
    };
}

export default function ResizableDiv() {
    const { width, workspaceRef } = useResizableDiv();

    return (
        <div id="workspace" className="flex" ref={workspaceRef}>
            <div id="sidebar" className={`h-screen flex bg-teal-900`} style={{ width: `${width}px` }}>
                <div className="content w-full"> sidebar-width: {width} </div>
                <div id="resize-handle" className="hover:cursor-col-resize px-2">
                    <div className="border-2 h-full shadow-lg"></div>
                </div>
            </div>
            <div id="main" className="bg-red-300 w-full h-screen"></div>
        </div>
    );
}
