import React from "react";
import calcDragHook from "../tools/calcDragHook";
function App() {
    const { DynamicDiv, DragDiv, Xdrag, Ydrag } = calcDragHook();

    return (
        <div id="workspace" className="flex">
            <div id="sidebar" ref={DynamicDiv} className="h-screen flex bg-teal-900 max-w-sm" style={{ width: Xdrag, minWidth: "200px" }} >
                <div className="content w-full"> 
                    {/* <span>sidebar-Width: {Xdrag}</span> */}
                    <div className="userProfile">Hachimetsu ;&lt;</div>
                    <div>
                        <div className="Search">Serch here</div>
                        <div className="Setting">setting option for workspace</div>
                    </div>
                    <div className="Index">
                        <div className="Favorate">Favorate + </div>
                        <div className="Private">Private + </div>
                        <div className="All">ALL</div>
                    </div>
                    <div className="NewPage">New Page +</div>
                </div>
                <div id="dragLine" ref={DragDiv} className=" border-r-2 border-red-700 h-full shadow-lg hover:cursor-col-resize px-1" />
            </div>
            <div className="main" />
        </div>
    );
}

export default App;
