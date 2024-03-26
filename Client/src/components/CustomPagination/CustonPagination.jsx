import React from "react";

const CustomPagination = ({
  currentPage,
  totalPages,
  onChangePage,
  handlePrevPage,
  handleNextPage,
}) => {
  const maxPageButtons = 5; // Número máximo de botones de página a mostrar

  const renderPageButtons = () => {
    const pageButtons = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    // Botón "Primero"
    pageButtons.push(
      <button
        key={"first"}
        className={`${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
        } rounded-full flex items-center justify-center w-8 h-8 mx-[1.5px] shadow-md`}
        onClick={() => onChangePage(1)}
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>
    );

    // Botón "Anterior"
    pageButtons.push(
      <button
        key={"prev"}
        className={`${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
        } rounded-full flex items-center justify-center w-8 h-8 mx-[1.5px] shadow-md`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
    );

    // Botones de páginas
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`${
            currentPage === i
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-primary hover:text-white rounded-full flex items-center justify-center w-8 h-8 mx-[1.5px] shadow-md`}
          onClick={() => onChangePage(i)}
        >
          {i}
        </button>
      );
    }

    // Botón "Siguiente"
    pageButtons.push(
      <button
        key={"next"}
        className={`${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
        } rounded-full flex items-center justify-center w-8 h-8 mx-[1.5px] shadow-md`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    );

    // Botón "Último"
    pageButtons.push(
      <button
        key={"last"}
        className={`${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-gray-900"
        } rounded-full flex items-center justify-center w-8 h-8 mx-[1.5px] shadow-md`}
        onClick={() => onChangePage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {">>"}
      </button>
    );

    return pageButtons;
  };

  return (
    <nav className="flex justify-center">
      <ul className="flex">
        {renderPageButtons()}
      </ul>
    </nav>
  );
};

export default CustomPagination;