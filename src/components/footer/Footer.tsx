import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaPhoneVolume, FaInstagram ,FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="">

        <div className="container-fluid mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
             {/* Section 1 - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link> <a ></a></li>
            <li><Link href="/about" className="hover:underline">About</Link> <a ></a></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link> <a ></a></li>
            <li><Link href="/downloads" className="hover:underline">Downloads</Link> <a ></a></li>
            <li><Link href="/orders" className="hover:underline">Orders</Link> <a ></a></li>
            {/* <li><Link href="/gallery" className="hover:underline">Gallery</Link> <a ></a></li> */}
            
            <li><a href="#" className="hover:underline"></a></li>
          </ul>
        </div>

        {/* Section 2 - Destinations */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Other Resources</h3>
          <ul className="space-y-2">
           <li> <Link href="https://jkbose.nic.in" className="hover:underline" >JKBOSE</Link></li>
           <li> <Link href="https://kupwara.nic.in/" className="hover:underline" >District Admin</Link></li>
           <li> <Link href="https://jkscert.unaux.com" className="hover:underline" >JKSCERT</Link></li>
           <li> <Link href="https://ceojk.nic.in/" className="hover:underline" >Chief Election Officer KMR</Link></li>
           {/* <li className="text-orange-800"> <Link href="/destinations/" className="hover:underline" >View All</Link></li> */}
           
            
          </ul>
        </div>

          {/* Section 3 - Icons */}
          <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            
            <a href="https://wa.me/+919906613451" target="blank" className="hover:text-gray-400"><FaWhatsapp size={24} /></a>
            {/* <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a> */}
            <a href="tel:+919906613451" className="hover:text-gray-400"><FaPhoneVolume size={24} /></a>
            <a href="#" target="blank" className="hover:text-gray-400"><FaInstagram size={24} /></a>
            <a href="#" target="blank" className="hover:text-gray-400"><FaFacebook size={24} /></a>
          </div>
        </div>


        </div>
        
       

      
        {/* Section 4 - Copyright */}
        <div className="flex items-center  md:flex-col mt-4">
          <p className="text-sm">Designed and Maintaned by : <a href="https://koshurcoder.in/" target="blank" className="text-orange-800 font-bold underline">Qashif Peer</a> </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} District Institute Of Education & Trainings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
