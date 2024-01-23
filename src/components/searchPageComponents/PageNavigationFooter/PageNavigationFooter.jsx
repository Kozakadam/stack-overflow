import React from 'react';

function PageNavigationFooter({currentPage, isNextPage, handlePageChange}) {
  return (
    <div className="grid w-full grid-cols-3">
      <button
        className={`m-2 w-fit p-2 text-left text-white ${
          currentPage > 1 ? 'bg-zinc-900 hover:bg-black ' : ''
        }`}
        disabled={currentPage == 1}
        onClick={() => handlePageChange(-1)}>
        Previous
      </button>
      <span className="flex items-center justify-center">
                  Page {currentPage}
                </span>
      <button
        className={`m-2 w-fit justify-self-end p-2 ${
          isNextPage ? 'bg-zinc-900 hover:bg-black ' : ''
        }`}
        disabled={!isNextPage}
        onClick={() => handlePageChange(1)}>
        Next
      </button>
    </div>
  );
}

export default PageNavigationFooter;
