'use client';
 
export default function Pagination({ 
    pageSize, currentPage, totalItems, onPageChange
}: { 
    pageSize: number;
    currentPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
}) {
    const totalPages = Math.ceil(totalItems / pageSize);

    function handlePagination(value: number) {
        return () => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            onPageChange(currentPage + value);
        }
    }

    return (
        <div className="flex gap-3 items-center justify-between border-t border-white/10 px-4 py-3">
            <div className="flex md:justify-end sm:flex-1 sm:items-center sm:justify-between">
                <p className="text-sm text-gray-300">
                    Showing <span className="font-medium">{(currentPage - 1) * pageSize + 1} </span>
                    to <span className="font-medium">{Math.min(currentPage * pageSize, totalItems)} </span>
                    of <span className="font-medium">{totalItems} </span>
                    results
                </p>
            </div>
            <div className="flex justify-end gap-3">
                <button 
                    type="button" 
                    className={`relative inline-flex items-center rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-gray-200 ${currentPage !== 1 ? 'hover:bg-blue-700 bg-gray-700 cursor-pointer' : 'bg-white/5 cursor-not-allowed'}`}
                    disabled={currentPage === 1}
                    onClick={handlePagination(-1)}>
                        Previous
                </button>
                <button 
                    type="button" 
                    className={`relative inline-flex items-center rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-gray-200 ${currentPage < totalPages ? 'hover:bg-blue-700 bg-gray-700 cursor-pointer' : 'bg-white/5 cursor-not-allowed'}`}
                    disabled={currentPage === totalPages}
                    onClick={handlePagination(1)}>
                        Next
                </button>
            </div>
        </div>
    )
}
