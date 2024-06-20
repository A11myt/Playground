export default function ScrollAnimation() {


    return (
        <>
            <style>
                {`@keyframes appear {
                     0% { opacity: 0; }
                    100% { opacity: 1; }
                    }
                .animate-appear {
                    animation: appear linear 1s;
                    animation-timeline: view();
                    animation-range: entry 0% cover 60%;
                }`} 
            </style>
            <div className="h-full w-full bg-white rounded" >
                <div className="flex flex-col h-full items-center overflow-y-auto ">
                    <h1 className="flex justify-center w-full py-4 mb-96">
                        Animate on Scroll
                    </h1>
                    <div className="flex flex-row flex-wrap overflow-visible w-full" >

                        <div className="bg-red-300 h-[300px] border-2 border-black m-2 w-[800px]  animate-appear"></div>
                        <div className="bg-green-300 h-[300px] border-2 border-black m-2 w-[300px]  animate-appear"></div>
                        <div className="bg-yellow-300 h-[300px] border-2 border-black m-2 w-[300px]  animate-appear"></div>
                        <div className="bg-blue-300 h-[300px] border-2 border-black m-2 w-[300px]  animate-appear"></div>
                        <div className=" bg-red-300 h-[300px] border-2 border-black m-2 w-[700px]  animate-appear"></div>

                        <div className="bg-red-300 h-[300px] border-2 border-black m-2 w-[800px]  animate-appear"></div>
                        <div className="bg-green-300 h-[300px] border-2 border-black m-2 w-[300px]  animate-appear"></div>
                        <div className="bg-yellow-300 h-[300px] border-2 border-black m-2 w-[300px]  animate-appear"></div>
                        <div className="bg-blue-300 h-[300px] border-2 border-black m-2 w-[300px]  animate-appear"></div>
                        <div className=" bg-red-300 h-[300px] border-2 border-black m-2 w-[700px]  animate-appear"></div>

                        <div className="bg-red-300 h-[300px] border-2 border-black m-2 w-[800px] animate-appear"></div>
                        <div className="bg-green-300 h-[300px] border-2 border-black m-2 w-[300px] animate-appear"></div>
                        <div className="bg-yellow-300 h-[300px] border-2 border-black m-2 w-[300px] animate-appear"></div>
                        <div className="bg-blue-300 h-[300px] border-2 border-black m-2 w-[300px] animate-appear"></div>
                        <div className=" bg-red-300 h-[300px] border-2 border-black m-2 w-[700px] animate-appear"></div>
                    </div>
                </div>
            </div>
        </>
    );
}