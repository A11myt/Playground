export default function Dictionary({
    pages,
    scrollToPage,
}: {
    pages: { pageNumber: number; name: string }[];
    scrollToPage: (pageNumber: number) => void;
}) {
    return (
        <div className="h-full w-full flex-none flex items-center flex-col">
            <div className="w-full h-full grid md:grid-cols-3 lg:grid-cols-4 xl:gird-cols-5 2xl:grid-cols-6 bg-white/40 backdrop-blur-md">
                <div className="p-4 flex flex-col gap-2 backdrop-blur-lg border-r border-gray-300 ">
                    {pages.map((page, index) => (
                        <div className="" id={`page-${page.pageNumber}`}>
                            <button
                                className="w-full justify-start flex font-inter  hover:group  hover:shadow-lg hover:pl-2 transition-all duration-200 ease-in-out"
                                onClick={() => scrollToPage(page.pageNumber)}
                            >
                                <span
                                    style={{ transform: "skewX(-15deg)" }}
                                    className="bg-black mr-[-10px] rounded-t font-bold rounded-bl px-4 py-1 border-b-2 border-black text-gray-100"
                                >
                                    {page.pageNumber}
                                </span>
                                <span className="w-full flex justify-start px-4 border-b-2 font-regular hover:bg-gray-100/50 rounded-tr-lg text-gray-800 text-lg border-black">
                                    {page.name}
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
