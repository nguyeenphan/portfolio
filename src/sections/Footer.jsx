const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                <div className='social-icon cursor-pointer' onClick={() => window.open('https://github.com/nguyeenphan', '_blank')}>
                    <img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2'/>
                </div>
                <div className='social-icon cursor-pointer' onClick={() => window.open('https://linkedin.com/in/khánh-nguyên-a12862326/', '_blank')}>
                    <img src='/assets/linkedin.png' alt='linkedin' className='w-1/2 h-1/2'/>
                </div>
                <div className='social-icon cursor-pointer' onClick={() => window.open('https://www.instagram.com/nguyeenphann/', '_blank')}>
                    <img src='/assets/instagram.png' alt='instagram' className='w-1/2 h-1/2'/>
                </div>
            </div>
            <p className='text-white-500'>
                © {new Date().getFullYear()} Nguyen Phan. All rights reserved
            </p>
        </section>
    )
}

export default Footer;