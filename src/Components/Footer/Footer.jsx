import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const company = [
  {id: 1, name: 'About Us', url: '/about'},
  {id: 2, name: 'Contact Us', url: '/contact'},
  {id: 3, name: 'Travel Guides', url: '/'},
  {id: 4, name: 'Data Policy', url: '/'}
]
const destination = [
  {id: 1, name: 'Paris', url: '/Paris'},
  {id: 2, name: 'Tokyo' , url: '/Tokyo'},
  {id: 3, name: 'New York', url: '/New York'},
  {id: 3, name: 'Kashmir', url: '/'},
]


const Footer = () => {
  return (
    <div className="bg-[#181818]">
        <div className="max-w-screen-xl mx-auto px-5 text-[#c3c5c5] py-10">
          <div className="md:flex justify-between items-center">
            <div>
              <h2 className="text-[#FF5522] text-2xl font-bold italic">Himalaya</h2>
              <div>
                <small>Need any help</small>
                <p>Call Us <span>01722222</span></p>
              </div>
              <p>Mirpur DOSH, Dhaka</p>
              <p>info@gmail.com</p>
              <div className="flex gap-3">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
              </div>
            </div>
            <div>
              <p className="font-bold pb-2">Company</p>
                <ul>
                  {
                    company.map((item) => <li className="hover:text-[#FF5522]" key={item.id}><Link to={item.url}>{item.name}</Link></li>)
                  }
                </ul>
            </div>
            <div>
            <p className="font-bold pb-2">Destinations</p>
                <ul>
                  {
                    destination.map((item) => <li className="hover:text-[#FF5522]" key={item.id}><Link to={item.url}>{item.name}</Link></li>)
                  }
                </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p>Sing up Newsletter</p>
              <input className="p-2 rounded-md outline-none" type="email" name="" placeholder="Enter email" id="" />
              <button className="bg-[#FF5522] py-2 rounded-md">Submit</button>
              <p>2023 Himalaya All Right Reserved.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer