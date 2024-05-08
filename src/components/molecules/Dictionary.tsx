export default function Dictionary({ pages }: { pages: { pageNumber: number, name: string }[] }) {
    return (
        <div className="h-full w-full flex-none flex items-center p-4 flex-col bg-slate-400">
            <div className="grid grid-rows-50 grid-cols-3 grid-flow-col  w-full">

            {pages.map((page, index) => (
                <div>
                    {page.pageNumber}
                    {page.name}
                </div>
            ))}
            </div>
        </div>
    );
}
