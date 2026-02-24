"use client";

import Skeleton from "@/../components/Skeleton";

export default function SignupLoading() {
    return (
        <main className="min-h-screen pt-24 flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-gray-900/50 border border-gray-800 p-8 rounded-2xl space-y-8">
                <div className="text-center space-y-2">
                    <Skeleton className="h-10 w-48 mx-auto" />
                    <Skeleton className="h-4 w-64 mx-auto" />
                </div>

                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-12 w-full" />
                        </div>
                    ))}
                </div>

                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-4 w-40 mx-auto" />
            </div>
        </main>
    );
}
