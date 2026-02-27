import React, { useState, useMemo } from 'react';

// Main App component
const Pagination = () => {
  // Mock data for demonstration purposes
  const mockData = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      title: `Item Title ${i + 1}`,
      description: `This is the description for item number ${i + 1}.`,
    }));
  }, []);

  // State to manage the current page number and search query
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;

  // Filter data based on the search query
  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return mockData;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return mockData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.description.toLowerCase().includes(lowerCaseQuery)
    );
  }, [mockData, searchQuery]); 

  // Calculate total number of pages based on filtered data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Use useMemo to re-calculate the visible items
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [currentPage, filteredData, itemsPerPage]);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle search input changes and reset page to 1
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when search query changes
  };

  // Generate an array of page numbers to render in the UI
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxPageButtons = 5; // Max number of page buttons to display
    let startPage, endPage;

    if (totalPages <= maxPageButtons) {
      // Show all pages if total pages are less than the max buttons
      startPage = 1;
      endPage = totalPages;
    } else {
      // Calculate start and end pages for a dynamic range
      startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
      endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

      // Adjust start and end if at the beginning or end of pages
      if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - maxPageButtons + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages, currentPage]);

  return (
    <div className="font-sans min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Pagination & Search Example</h1>

        {/* Search input field */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for an item..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          />
        </div>

        {/* Display the current items */}
        <div className="space-y-4 mb-8">
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <div key={item.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No items found.</div>
          )}
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {/* Previous button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Previous
            </button>

            {/* Page number buttons */}
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  currentPage === page
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>
        )}
        <div className="text-center text-xs text-gray-400 mt-4">
          Showing {currentItems.length} of {filteredData.length} items. Page {currentPage} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default Pagination   
