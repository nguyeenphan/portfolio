import { MdArrowOutward } from "react-icons/md";

function Project() {
    return (
        <section id="project" className="w-full flex flex-col relative">
            <div className="c-space max-w-7xl">
                <h1 className="font-bold leading-tight tracking-tight text-slate-300 text-6xl md:text-7xl mb-8">Projects</h1>
                <hr className='w-full border-t-2 border-slate-300 mt-4 mb-6'/>

                <div className='flex flex-col gap-5 w-full cursor-pointer group'
                     onClick={() => window.open('https://github.com/nguyeenphan/Casela', '_blank')}>
                    <div>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                <div
                                    className='text-3xl font-semibold text-slate-300 transition-transform duration-300 group-hover:scale-105'>Custom
                                    Phone Case
                                </div>
                                <div className='text-lg font-semibold text-yellow-400'> Next.js | Tailwind</div>
                            </div>
                            <div
                                className='flex flex-row gap-2 text-slate-300 justify-center items-center text-2xl transition-transform duration-300 group-hover:scale-105'>
                                <div>View Project</div>
                                <MdArrowOutward/>
                            </div>
                        </div>
                        <hr className='w-full border-t-2 border-slate-300 my-6'/>
                    </div>
                </div>

                <div className='flex flex-col gap-5 w-full cursor-pointer group'
                     onClick={() => window.open('https://github.com/nguyeenphan/Ecommerce-Website', '_blank')}>
                    <div>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                <div
                                    className='text-3xl font-semibold text-slate-300 transition-transform duration-300 group-hover:scale-105'>
                                    ECommerce - Clothing Store
                                </div>
                                <div className='text-lg font-semibold text-yellow-400'> React.js | Tailwind</div>
                            </div>
                            <div
                                className='flex flex-row gap-2 text-slate-300 justify-center items-center text-2xl transition-transform duration-300 group-hover:scale-105'>
                                <div>View Project</div>
                                <MdArrowOutward/>
                            </div>
                        </div>
                        <hr className='w-full border-t-2 border-slate-300 my-6'/>
                    </div>
                </div>

                <div className='flex flex-col gap-5 w-full cursor-pointer group'
                     onClick={() => window.open('https://github.com/PhAnhHuy/Art-Gallary', '_blank')}>
                    <div>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                <div
                                    className='text-3xl font-semibold text-slate-300 transition-transform duration-300 group-hover:scale-105'>
                                    Art Gallery
                                </div>
                                <div className='text-lg font-semibold text-yellow-400'> React.js | Three.js | Tailwind</div>
                            </div>
                            <div
                                className='flex flex-row gap-2 text-slate-300 justify-center items-center text-2xl transition-transform duration-300 group-hover:scale-105'>
                                <div>View Project</div>
                                <MdArrowOutward/>
                            </div>
                        </div>
                        <hr className='w-full border-t-2 border-slate-300 my-6'/>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Project;