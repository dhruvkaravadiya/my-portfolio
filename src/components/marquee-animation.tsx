import React from "react";

export default function MarqueeAnimation() {
    return (
        <div className="marquee text-ink font-mono text-xs uppercase tracking-wide border-2 border-ink bg-cream px-3">
            <div>
                <div>
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal-dark"></span>
                    </span>
                    <span>Available for Freelancing / Jobs</span>
                </div>
                <div>
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal-dark"></span>
                    </span>
                    <span>Available for Freelancing / Jobs</span>
                </div>
            </div>
        </div>
    );
}
