import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const styles = {
  header: {
    backgroundImage: `url('https://actis.co.in/wp-content/uploads/2018/03/sales-contact-bg-2.jpg')`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },

  content: {
    height: '100%',
    width: '100%',
    top: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
  },
};

const Contact = () => {
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

  return (
    <div className=''>
      <div className='text-white h-svh bg-img' style={styles.header}></div>
      <div
        className=' text-white text-xl flex justify-center items-center'
        style={styles.content}
      >
        <form ref={form} onSubmit={sendEmail}>
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
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
