import React from "react";

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    dark?: boolean;
}

export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = "left",
    dark = false,
}: SectionHeadingProps) {
    return (
        <div
            className={`flex flex-col gap-4 ${
                align === "center"
                    ? "items-center text-center"
                    : "md:flex-row md:items-end md:justify-between"
            }`}
        >
            <div className={align === "center" ? "" : "max-w-xl"}>
                <span
                    className={`eyebrow block mb-3 ${
                        dark ? "text-signal" : "text-muted"
                    }`}
                >
                    {eyebrow}
                </span>
                <h2
                    className={`font-display uppercase tracking-tight text-4xl md:text-5xl ${
                        dark ? "text-cream" : "text-ink"
                    }`}
                >
                    {title}
                </h2>
            </div>
            {subtitle && (
                <p
                    className={`max-w-sm text-sm leading-relaxed font-mono ${
                        dark ? "text-cream/60" : "text-muted"
                    } ${align === "center" ? "mx-auto" : ""}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
