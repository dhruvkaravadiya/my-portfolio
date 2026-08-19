import React from "react";

const stats = [
    { value: "3+", label: "Projects Shipped" },
    { value: "30+", label: "Tech & Tools" },
    { value: "11+", label: "Months Experience" },
];

export default function StatsSection() {
    return (
        <section className="bg-cream border-b-[3px] border-ink px-4 md:px-8 py-10 md:py-14">
            <div className="max-w-screen-xl mx-auto">
                <div className="bg-ink border-2 border-ink grid grid-cols-1 sm:grid-cols-3 shadow-hard-signal">
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`flex items-center gap-4 justify-center py-8 px-4 text-center ${
                                i !== stats.length - 1
                                    ? "sm:border-r-2 sm:border-cream/15 border-b-2 sm:border-b-0 border-cream/15"
                                    : ""
                            }`}
                        >
                            <span className="font-display text-3xl md:text-4xl text-signal">
                                {stat.value}
                            </span>
                            <span className="eyebrow text-cream/70 text-left">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
