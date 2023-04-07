import React, { useState } from "react";
import calcDragHook from "../tools/calcDragHook";
import { Pages } from "./pages.json";
export default function Component() {
    const { DynamicDiv, DragDiv, Xdrag, Ydrag } = calcDragHook();
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    return (
        <div id="workspace" className="flex" style={{ zIndex: 100 }}>
            <div id="sidebar" ref={DynamicDiv} className="h-screen flex bg-teal-900 max-w-sm" style={{ width: Xdrag, minWidth: "200px" }} >
                <div className="content w-full"> 
                    {/* <span>sidebar-Width: {Xdrag}</span> */}
                    <div className="userProfile text-center h-12 flex items-center relative" onClick={toggleMenu}>
                        <div className="icon-wrapper w-12 h-12 rounded-full overflow-hidden mr-2 flex-shrink-0">
                            <span className="icon h-full text-white text-3xl flex items-center justify-center">U</span>
                        </div>
                        <span className="name text-white font-bold">userName</span>
                        {/* Floating menu */}
                        {showMenu && (
                            <div className="absolute top-full left-4 mt-2 w-48 bg-white rounded-sm shadow-xl z-10">
                                <div className="px-4 py-2">hachimetsu@gmail.com</div>
                                <div className="px-4 py-2 hover:bg-gray-200">Logout</div>
                                <div className="px-4 py-2 hover:bg-gray-200">Add Cmp</div>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="Search">Serch here</div>
                        <div className="Setting">setting option for workspace</div>
                    </div>
                    <div className="Index">
                        <div className="Favorate">
                            <span>Favorate + </span>
                            <div className="pages">
                                {Object.values(Pages.favorate).map((page) => (
                                    <li key={page.title}>
                                        <span className={`icon-${page.icon}`}></span>
                                        {page.title}
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="Private">
                            <span>Private + </span>
                            <div className="pages">
                                {Object.values(Pages.private).map((page) => (
                                    <li key={page.title}>
                                        <span className={`icon-${page.icon}`}></span>
                                        {page.title}
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="Public">
                            <span>Public + </span>
                            <div className="pages">
                                {Object.values(Pages.public).map((page) => (
                                    <li key={page.title}>
                                        <span className={`icon-${page.icon}`}></span>
                                        {page.title}
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="NewPage"><span>New Page +</span></div>
                </div>
                <div id="dragLine" ref={DragDiv} className=" border-r-2 border-red-700 h-full shadow-lg hover:cursor-col-resize px-1" />
            </div>
            <div className="main" />
        </div>
    );
}


