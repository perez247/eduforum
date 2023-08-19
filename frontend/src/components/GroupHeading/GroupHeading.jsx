import React from "react";
// import classes from "./GroupHeading.module.css";

import {
    AcademicCapIcon, PlusIcon
  } from "@heroicons/react/24/solid";
  
const GroupHeading = () => {
    return (
        <div className="bg-[#21262E] w-full">
            <div className="px-6">
                <div className="flex items-center h-40 ps-14">
                    <div className="felx-none w-14 h-14 bg-[#262626] me-3">
                        <AcademicCapIcon className="h-13 w-13 text-lg text-secondary" />
                    </div>
                    <div className="felx-initial w-2/3 text-white">
                        <p className="text-xl font-bold">Curriculum Hub</p>
                        <p className="text-xs">Lesson Plans, Templates and Inspiration</p>
                    </div>
                    <div className="felx-initial w-14">
                        <PlusIcon className="h-7 w-7 bg-red-500 text-white font-extrabold"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupHeading;