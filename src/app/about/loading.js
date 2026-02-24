"use client";

import Skeleton from "@/../components/Skeleton";

export default function AboutLoading() {
    return (
        <main className="min-h-screen pt-20 pb-24 max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <Skeleton className="h-16 w-2/3 mx-auto mb-6" />
                <Skeleton className="h-6 w-1/2 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <Skeleton className="h-10 w-1/2" />
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                </div>
                <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                    <div className="grid grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="h-32 w-full rounded-xl" />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
