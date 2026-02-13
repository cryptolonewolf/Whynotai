import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='w-full p-4 flex justify-between bg-white shadow-xl border-b-4 border-blue-400'>
      <h1 className='text-2xl font-extrabold text-blue-800'>Why Not AI.org</h1>
      <div className='space-x-6 font-semibold text-blue-700'>
        <Link to='/'>Home</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/internships'>Internships</Link>
        <Link to='/resources'>Resources</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/forum'>Forum</Link>
        <Link to='/login'>Login</Link>
      </div>
    </nav>
  );
}
