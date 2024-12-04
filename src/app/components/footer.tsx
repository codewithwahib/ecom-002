import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faTiktok, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faArrowCircleRight, faCopyright } from '@fortawesome/free-solid-svg-icons'; 

export default function Footer() {
  return (
    <main className="bg-neutral-900">
      <div className="w-full sm:h-full lg:h-[350px] bg-neutral-900 flex justify-center items-center">
        <div className="sm:pl-[5%] md:pl-[10%] lg:pl-0 w-full gap-y-9 pt-3 sm:pb-6 flex sm:flex-col lg:flex-row justify-evenly text-white">
          <div className="w-[200px]">
            <h1 className="font-bold text-xl mr-4">Exclusive</h1>
            <ul>
              <li className="pt-2 cursor-pointer">Subscribe</li>
              <li className="pt-2 cursor-pointer">Get 10% off your first order</li>
              <li className="mt-3 cursor-pointer py-1 border flex justify-center">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="bg-gray-900 border-none text-white px-2 py-1 focus:outline-none"
                />
                <FontAwesomeIcon icon={faArrowCircleRight} className="text-xl sm:hidden md:block" />
              </li>
            </ul>
          </div>
          <div className="w-[200px]">
            <h1 className="font-bold text-xl">Support</h1>
            <ul>
              <li className="pt-1 cursor-pointer">111 Bijoy malir, dsfds, DH 1515, Pakistan.</li>
              <li className="pt-1 cursor-pointer">exclusive@gmail.com</li>
              <li className="pt-1 cursor-pointer">+88015-88888-9999</li>
            </ul>
          </div>
          <div className="w-[200px]">
            <h1 className="font-bold text-xl">Account</h1>
            <ul>
              <li className="pt-1 cursor-pointer">My Account</li>
              <li className="pt-1 cursor-pointer">Login / Register</li>
              <li className="pt-1 cursor-pointer">Cart</li>
              <li className="pt-1 cursor-pointer">Wishlist</li>
              <li className="pt-1 cursor-pointer">Shop</li>
            </ul>
          </div>
          <div className="w-[200px]">
            <h1 className="font-bold text-xl">Quick Link</h1>
            <ul>
              <li className="pt-1 cursor-pointer">Privacy Policy</li>
              <li className="pt-1 cursor-pointer">Terms Of Use</li>
              <li className="pt-1 cursor-pointer">FAQ</li>
              <li className="pt-1 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-xl pb-4">Follow Us</h1>
            <ul className="list-none flex gap-x-3">
              <li>
                <FontAwesomeIcon icon={faFacebook} className="text-xl cursor-pointer" aria-label="Facebook" />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} className="text-xl cursor-pointer" aria-label="LinkedIn" />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} className="text-xl cursor-pointer" aria-label="YouTube" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTiktok} className="text-xl cursor-pointer" aria-label="TikTok" />
              </li>
              <li>
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl cursor-pointer" aria-label="WhatsApp" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-white text-center text-sm pb-4">
        <FontAwesomeIcon icon={faCopyright} className="text-lg mr-3" />
        Copyright codewithwahib 2022. All rights reserved
      </p>
    </main>
  );
}
