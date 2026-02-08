'use client'
import  { ChangeEvent, SubmitEvent, useRef, useState } from 'react'
import ContentIcon from './ContentIcon'
import { FaArrowRightLong, FaPaperPlane } from 'react-icons/fa6'
import InputwithLabel from './InputwithLabel'
import DropwithLabel from './DropwithLabel'
import TextAreawithLabel from './TextAreawithLabel'
import PrimaryBtn from '../shared/buttons/PrimaryBtn'
import { ContactFormPayload } from '@/types/Types'
import { enqueueSnackbar } from 'notistack'
import { sendEmail } from '@/lib/actions/contact.action'

const ContactForm = () => {
    const [data, setData] = useState<Partial<ContactFormPayload>>({serviceType:'Cadastral Surveying'});
    const [loading, setLoading] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        const {name, value} = e.target;
        setData(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e:SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const res = await sendEmail(data);
            enqueueSnackbar(res.message, { variant: res.success ? 'success' : 'error' });
            if(res.success){
                formRef.current?.reset();
                setData({});
            }
        } catch (error) {
            console.log(error);
            enqueueSnackbar('Failed to send email. Please try again later.', { variant: 'error' });
        }finally{
            setLoading(false);
        }
    }

  return (
    <div className='flex-col w-full md:w-[45%] items-center' >
        <form ref={formRef} onSubmit={handleSubmit} className='p-5 shadow flex flex-col gap-3 bg-white rounded-lg' >
            <div className="flex items-center gap-2">
                <ContentIcon icon={<FaPaperPlane color='#0F4C75' />} className='h-8 w-8 rounded-lg bg-[#2563EB1A]/90' />
                <span className='subtitle' >Send Us a Message</span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-3 w-full">
                <InputwithLabel name='firstName' onChange={handleChange} containerClassName='w-full md:w-48%' label="First Name" placeholder="Enter your first name" required />
                <InputwithLabel name='lastName' onChange={handleChange} containerClassName='w-full md:w-48%' label="Last Name" placeholder="Enter your last name" required />
            </div>
            <InputwithLabel name='email' onChange={handleChange} label="Email" type='email' placeholder="Enter your email address" required />
            <InputwithLabel name='phoneNumber' onChange={handleChange} label="Phone Number" type='tel' placeholder="Enter your phone number" required />
            <DropwithLabel onChange={handleChange} name='serviceType' label='Servicerequired ' 
                options={[
                    'Cadastral Surveying',
                    'Land Documentation',
                    'Land Acquisition Advisory',
                    'Site Planning & Setting Out',
                    'Topographic & Engineering Surveys',
                    'Drone & GIS Services',
                    'Other'
                ]}
            />
            <TextAreawithLabel name='message' onChange={handleChange} label='Message' placeholder="Enter your message" required />
            <PrimaryBtn type='submit' disabled={loading} reversed icon={<FaArrowRightLong color='white' />} text={loading ? 'Semding...':'Send Message'} />
        </form>
    </div>
  )
}

export default ContactForm