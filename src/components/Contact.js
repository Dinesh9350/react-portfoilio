import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useBackgroundImg from '../helper/useBackgroundImg';
import useScrollToTop from '../helper/useScrollToTop';

const Contact = () => {
  const scroll = useScrollToTop();
  const styles = useBackgroundImg(
    'https://actis.co.in/wp-content/uploads/2018/03/sales-contact-bg-2.jpg'
  );
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ba19ekl',
        'template_b0uzzzn',
        form.current,
        '8srZ60x-4fpWQWiiH'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const SubmitHandler = () => {
    alert('Message Sent ✅');
  };
  return (
    <div className=''>
      <div className='text-white h-svh bg-img' style={styles.header}></div>
      <div
        className=' text-white text-xl flex justify-center items-center'
        style={styles.content}
      >
        <form
          data-aos='zoom-out'
          data-aos-duration='500'
          data-aos-once='true'
          ref={form}
          onSubmit={sendEmail}
        >
          <h1 className='text-4xl font-bold'>Contact Me</h1>
          <div>
            {/* <label>Name</label> */}
            <input
              className='border bg-transparent rounded-lg m-3 px-5 py-2'
              type='text'
              name='from_name'
              placeholder='Name..'
            />
          </div>
          <div>
            {/* <label>Email</label> */}
            <input
              className='border bg-transparent rounded-lg m-3 px-5 py-2'
              type='email'
              name='from_email'
              placeholder='Email...'
            />
          </div>
          <div>
            {/* <label>Message</label> */}
            <textarea
              className='w-80 border bg-transparent rounded-lg m-3 px-5 py-2'
              name='message'
              placeholder='Message...'
            />
          </div>
          <input
            className='bg-green-500 p-2 px-3 rounded-lg text-xl'
            type='submit'
            value='Send'
            onClick={SubmitHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
