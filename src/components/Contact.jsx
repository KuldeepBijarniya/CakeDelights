import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';

export default function Contact() {
const [name,setName]=useState('');
const [msg,setMsg]=useState('');

function onChange1(e){
  setName(e.target.value)
}
function onChange2(e){
  setMsg(e.target.value)
}
  return (
    <div>
<section id="contact" className="py-6 bg-rose-200 text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold text-rose-800">Get in touch</h1>
			<p className="pt-2 pb-4 text-rose-800">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center text-rose-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<Link to="https://goo.gl/maps/W69htEuHQ8AJVopU6"><span className='text-rose-800'>Main stand, Khood</span></Link>
				</p>
				<p className="flex items-center text-rose-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span  className='text-rose-800' ><Link to='https://api.whatsapp.com/send?phone=9521189214&text=Hi'>+91 1234567890</Link></span>
				</p>
				<p className="flex items-center text-rose-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span  className='text-rose-800' onClick={() => window.location = 'mailto:cakedelights821@gmail.com'}>cakedelights821@gmail.com</span>
				</p>
			</div>
		</div>
		<div noValidate="" className="text-rose-800 flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1 text-rose-800">Full name</span>
				<input onChange={onChange1} required id="name" type="text" placeholder="Kuldeep Bijarniya" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 focus:ring-rose-400 " />
			</label>
			<label className="block">
				<span className="mb-1 text-rose-800" >Email address</span>
				<input required type="email" placeholder="example@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 focus:ring-rose-400" />
			</label>
			<label className="block text-rose-800">
				<span className="mb-1">Message</span>
				<textarea onChange={onChange2} required id="msg" rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-rose-400"></textarea>
			</label>
			<Link to={`https://api.whatsapp.com/send?phone=916367205027&text=Hi%20I%20am%20${encodeURIComponent(name)}.%20${encodeURIComponent(msg)}`}><button  type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-rose-800 text-white focus:ring-rose-400 hover:ring-rose-400">Submit</button></Link>
		</div>
	</div>
</section>
    </div>
  )
}
