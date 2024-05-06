import React from "react";

export default function MarqueeAnimation() {
    return (
        <div className="marquee text-gray-700 font-semibold bg-slate-50 rounded-md">
            <div>
                <div>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span>Avaliable for Freelancing / Jobs</span></div>
                <div>
                <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span>Avaliable for Freelancing / Jobs</span>
                </div>
            </div>
        </div>
    );
}