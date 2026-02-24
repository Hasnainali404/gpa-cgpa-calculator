"use client";

export default function Skeleton({ className = "", circle = false }) {
    return (
        <div
            className={`skeleton ${circle ? "rounded-full" : "rounded-lg"} ${className}`}
        />
    );
}
