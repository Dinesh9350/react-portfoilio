import React from 'react';
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black text-white flex justify-around items-center '>
      <ul>
        <li className='flex m-4 items-center '>
          <FaHome />
          <p className='mx-3'>Nangloi, Delhi</p>
        </li>
        <li className='flex m-4 items-center '>
          <FaPhone />
          <p className='mx-3'>+91 9315446968</p>
        </li>
        <li className='flex m-4 items-center '>
          <FaMailBulk />
          <p className='mx-3'>dineshsingh9350@gmail.com</p>
        </li>
      </ul>
      <ul>
        <li>
          <h3 className='font-bold'>About me</h3>
          <p>
            I am Dinesh, a frontend developer having experience of creating
            several projects using React.js, html, css
          </p>
          <div className='flex justify-center items-center text-2xl'>
            <span className='mx-2'>
              <FaFacebook />
            </span>
            <span className='mx-2'>
              <FaTwitter />
            </span>
            <span className='mx-2'>
              <FaLinkedin />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
