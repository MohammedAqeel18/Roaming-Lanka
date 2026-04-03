function Pagination({page, pages,onPageChange}){
    return (
        <div className="flex justify-center mt-6 space-x-2">
            {[...Array(pages).keys()].map((x)=>(
                <button
                    key={x+1}
                    onClick={() => onPageChange(x+1)}
                    
                    className={`px-3 py-1 rounded ${x+1 === page ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}  `}>
                    {x+1}

                </button>
            ))}
        </div>
    )
}

export default Pagination;