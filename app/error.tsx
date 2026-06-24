'use client';

export default function Error({ error, }: { error: Error & { digest?: string }; }) {
    return (
        <div className="p-8 text-center space-y-4">
            <p className="text-[#000000]text-sm">{error.message}</p>
        </div>
    );
}