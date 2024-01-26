import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const NavbarCustom = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 text-lg lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link to='/' className='flex items-center'>
          Home
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link to='/skills' className='flex items-center'>
          Skills
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link to='/projects' className='flex items-center'>
          Projects
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='flex items-center gap-x-2 p-1 font-medium'
      >
        <Link to='/contact' className='flex items-center'>
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='nav sticky top-0 bg-transparent text-white mx-auto  max-w-screen-2xl px-4 py-2 lg:px-8 lg:py-4 border-none w-full'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900 lg:px-40'>
        <Link to='/' className='mr-4 cursor-pointer py-1.5 font-bold text-xl'>
          Dinesh
        </Link>
        <div className='hidden lg:block'>{navList}</div>

        <IconButton
          variant='text'
          className='ml-auto mr-5 mb-4 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className='container mx-auto'>{navList}</div>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarCustom;
