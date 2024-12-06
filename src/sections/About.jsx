import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";
import {useMediaQuery} from "react-responsive";

function About() {
    const [hasCopied, setHasCopied] = useState(false);
    const isMobile = useMediaQuery({maxWidth: 768});

    const handleCopy = () => {
        navigator.clipboard.writeText('phannguyenbh0902@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }
    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl: row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/Haku.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain rounded-xl'/>
                        <div>
                            <p className='grid-headtext'>Hi I&#39;m Nguyen</p>
                            <p className='grid-subtext'> With 1 years of experience in Frontend development and UX design, with
                            a focus on User-Centered Design.</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid-2.png' alt='grid-2' className='w-full sm:h-[276px] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>Tech Stacks</p>
                            <p className='grid-subtext'>
                                I specialize in Javascript with focus on React and Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe height={326}
                                   width={326}
                                   backgroundColor='rgba(0, 0, 0, 0)'
                                   backgroundImageOpacity={0.5}
                                   showAtmosphere
                                   showGraticules
                                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                   labelsData={[{
                                        lat: 10.3, lng: 106.4,
                                        text: 'I am here, Ho Chi Minh City',
                                        color: 'orange',
                                        size: 30,
                                   }]}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                I work remotely across most timezones.
                            </p>
                            <p className='grid-subtext'>
                                I am based in Ho Chi Minh City, Vietnam.
                            </p>
                            <Button name='Contact' isBeam={true} containerClass='w-full mt-10'/>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain'/>

                        <div>
                            <p className='grid-headtext'>My passion For Coding</p>
                            <p className='grid-subtext'>
                                I am passionate about coding and design. I love to create beautiful and functional
                                websites that are user-friendly. You can view more of my work on <span
                                className='text-slate-400 hover:text-sky-400 font-semibold shaking cursor-pointer items-center'
                                onClick={() => window.open('https://github.com/nguyeenphan', '_blank')}>Github</span>
                                 {/*<img src='/assets/github.svg' alt='github' className='inline w-4 h-4 mb-1'/>*/}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src='/assets/mail.png' alt='grid-4' className='w-full sm:h-[60px] h-fit object-contain'/>
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact me through</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy'/>
                                <p className='lg:text-xl md:text-xl font-medium text-gray_gradient text-white'>phannguyenbh0902@gmail</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;