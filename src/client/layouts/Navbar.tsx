import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar: React.FC = ({ children }) => {
	return (
		<div>
			<nav className='bg-[#a15103] fixed top-0 left-0 w-full z-50  shadow-md'>
				<div className='container mx-auto flex justify-between items-center p-4'>
					<div className='text-white text-xl font-bold'>REMS</div>
					<div className='flex space-x-4'>
						<Link to='/' className='text-white hover:text-gray-200'>
							Home
						</Link>
						<Link
							to='/user/appointment'
							className='text-white hover:text-gray-200'
						>
							Appointment
						</Link>
						<Link
							to='/user/history'
							className='text-white hover:text-gray-200'
						>
							History
						</Link>
						<Link
							to='/user/transaction'
							className='text-white hover:text-gray-200'
						>
							Transaction
						</Link>
					</div>
				</div>
			</nav>
			<div className='container mx-auto py-4'>
				{/* <Outlet /> */}

				{children}
			</div>
		</div>
	);
};

export default Navbar;
