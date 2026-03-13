'use client';

import { useRouter } from 'next/navigation';

export default function RouteButton() {
  const router = useRouter();

    const handleBack = () => {
        console.warn('Back button clicked');
        router.back();
    };

    return (
        <div>
            <button
                type="button"
                className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                onClick={handleBack}
            >
                Return
            </button>
        </div>
    );
}