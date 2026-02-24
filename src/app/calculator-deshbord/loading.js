"use client";

import Skeleton from "@/../components/Skeleton";

export default function DashboardLoading() {
    return (
        <main className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                <div className="space-y-2">
                    <Skeleton className="h-10 w-64" />
                    <Skeleton className="h-4 w-48" />
                </div>
                <Skeleton className="h-12 w-40 rounded-xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
                        <Skeleton className="h-8 w-48 mb-6" />
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-4">
                                    <Skeleton className="h-12 flex-1" />
                                    <Skeleton className="h-12 w-24" />
                                </div>
                            ))}
                        </div>
                        <Skeleton className="h-12 w-32 mt-6" />
                    </div>
                </div>
                <div className="space-y-6">
                    <Skeleton className="h-64 w-full rounded-2xl" />
                    <Skeleton className="h-48 w-full rounded-2xl" />
                </div>
            </div>
        </main>
    );
}
