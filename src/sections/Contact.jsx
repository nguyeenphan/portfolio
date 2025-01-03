import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {useMediaQuery} from "react-responsive";

const Contact = () => {

    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({maxWidth: 768, maxHeight: 1024});

    const formRef = useRef();

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    //service_ed9y5vy

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_ed9y5vy',
                'template_cqjfiwa',
                {
                    from_name: form.name,
                    to_name: 'Khanh Nguyen',
                    from_email: form.email,
                    to_email: 'phannguyenbh0902@gmail.com',
                    message: form.message
                }, '-Rx87gDRkuAdbmS9K')
            setLoading(false);
            alert('Message sent successfully!');
            setForm({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            console.log(error);
            alert('Something went wrong!');
        }
    }

    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                {isMobile || isTablet ? null : <img src='/assets/background.png' alt='terminal background'
                                        className='absolute inset-0 min-h-screen'/>}
                <div className='contact-container'>
                    <h3 className='head-text'>Let&#39;s talk</h3>
                    <p className='text-lg text-white-600 mt-3'>
                        I am open to new opportunities and collaborations, bring your ideas to life. I am here to help. Feel free to contact me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Your Full Name
                            </span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required={true}
                                className='field-input'
                                placeholder='Phan Nguyen Khanh Nguyen'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Your Email
                            </span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required={true}
                                className='field-input'
                                placeholder='something@gmail.com'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Your message
                            </span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required={true}
                                rows={5}
                                className='field-input'
                                placeholder='Ay yo, I have a project for you...'
                            />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;