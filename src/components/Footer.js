import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black text-white sm:flex justify-center items-center pt-5 '>
      <ul className=''>
        <li className='flex justify-center  sm:justify-start m-4 items-center '>
          <FaHome />
          <p className='mx-3'>Nangloi, Delhi</p>
        </li>
        <li className='flex m-4  justify-center  sm:justify-start items-center '>
          <FaPhone />
          <p className='mx-3'>+91 9315446968</p>
        </li>
        <li className='flex justify-center sm:justify-start m-4 items-center '>
          <FaMailBulk />
          <p className='mx-3'>dineshsingh9350@gmail.com</p>
        </li>
      </ul>
      <ul className='p-5 '>
        <li className='py-2'>
          <h3 className='font-bold sm:text-start  py-1'>About me</h3>
          <p className=' py-1'>
            I am Dinesh, a frontend developer having experience of creating
            several projects using React.js, html, css.
          </p>
          <div className='flex justify-center items-center text-2xl sm:justify-start py-2'>
            <span className='mx-2'>
              <Link
                to='https://www.linkedin.com/in/dinesh-singh3/'
                target='blank'
              >
                <FaLinkedin />
              </Link>
            </span>

            <span className='mx-2'>
              <Link to='https://twitter.com/Dinesh62486433' target='blank'>
                <FaTwitter />
              </Link>
            </span>
            <span className='mx-2'>
              <Link to='https://wa.me/919315446968?text=' target='blank'>
                <FaWhatsapp />
              </Link>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
