import React from "react";
import calcDragHook from "../tools/calcDragHook";
function App() {
    const { DynamicDiv, DragDiv, Xdrag, Ydrag } = calcDragHook();
    return (
        <div id="workspace" className="flex">
            <div id="sidebar" ref={DynamicDiv} className="h-screen flex bg-teal-900" style={{ width: Xdrag }} >
                <div className="content w-full"> sidebar-Width: {Xdrag} </div>
                <div id="dragLine" ref={DragDiv} className=" border-r-2 border-red-700 h-full shadow-lg hover:cursor-col-resize px-1" />
            </div>
            <div className="main" />
        </div>
    );
}

export default App;
