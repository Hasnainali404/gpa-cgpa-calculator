"use client";

import Skeleton from "@/../components/Skeleton";

export default function FormulaLoading() {
    return (
        <main className="min-h-screen pt-20 pb-24 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <Skeleton className="h-12 w-1/2 mx-auto mb-4" />
                <Skeleton className="h-6 w-1/3 mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                    <div key={i} className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <Skeleton className="w-12 h-12 rounded-xl" />
                            <Skeleton className="h-8 w-40" />
                        </div>
                        <Skeleton className="h-20 w-full mb-6" />
                        <Skeleton className="h-40 w-full rounded-xl" />
                    </div>
                ))}
            </div>
        </main>
    );
}
