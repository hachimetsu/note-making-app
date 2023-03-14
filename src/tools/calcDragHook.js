import { useState, useRef, useEffect, useCallback } from "react";

export default function calcDragHook() {
    const DragDiv = useRef(null);
    const DynamicDiv = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [Xdrag, setXDrag] = useState(268);
    const [Ydrag, setYDrag] = useState(null);

    const startResizing = useCallback((mouseDownEvent) => { setIsResizing(true) }, []);

    const stopResizing = useCallback(() => { setIsResizing(false) }, []);

    const resize = useCallback(
        (mouseMoveEvent) => {
            if (isResizing) {
                setXDrag(mouseMoveEvent.clientX - DynamicDiv.current.getBoundingClientRect().left);
                setYDrag(mouseMoveEvent.clientY - DynamicDiv.current.getBoundingClientRect().top);
            }
        },
        [isResizing]
    );

    const preventDefaultDrag = (e) => e.preventDefault();

    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        window.addEventListener("mousedown", preventDefaultDrag);

        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
            window.removeEventListener("mousedown", preventDefaultDrag);
        };
    }, [resize, stopResizing]);

    useEffect(() => {
        DragDiv.current.addEventListener("mousedown", startResizing);

        return () => {
            DragDiv.current.removeEventListener("mousedown", startResizing);
        };
    }, [startResizing]);

    return { DynamicDiv, DragDiv, Xdrag, Ydrag };
}
