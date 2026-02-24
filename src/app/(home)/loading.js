"use client";

import Skeleton from "@/../components/Skeleton";

export default function HomeLoading() {
    return (
        <main className="max-w-7xl mx-auto px-6 pt-10">
            {/* Hero Skeleton */}
            <div className="text-center space-y-6 mb-20 pt-20">
                <Skeleton className="h-16 w-3/4 mx-auto" />
                <Skeleton className="h-6 w-1/2 mx-auto" />
                <Skeleton className="h-12 w-40 mx-auto" />
            </div>

            {/* Features Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-8 border border-gray-800 rounded-2xl">
                        <Skeleton className="w-12 h-12 mb-6" circle />
                        <Skeleton className="h-8 w-3/4 mb-4" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                ))}
            </div>
        </main>
    );
}
