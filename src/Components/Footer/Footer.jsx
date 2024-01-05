import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const company = [
  { id: 1, name: "About Us", url: "/about" },
  { id: 2, name: "Contact Us", url: "/contact" },
  { id: 3, name: "Travel Guides", url: "/" },
  { id: 4, name: "Data Policy", url: "/" },
];
const destination = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Chittagong" },
  { id: 3, name: "Rajshahi" },
  { id: 3, name: "Mymensingh" },
  { id: 3, name: "Barishal" },
  { id: 3, name: "Khulna" },
  { id: 3, name: "Sylhet" },
  { id: 3, name: "Rangpur" },
];

const Footer = () => {
  return (
    <div>
      <div className="bg-[#181818]">
        <div className="max-w-screen-xl mx-auto px-5 text-[#c3c5c5] py-10">
          <div className="md:flex justify-between items-center">
            <div>
              <h2 className="text-[#FF5522] text-2xl font-bold italic">
                TOUR UTOPIA
              </h2>
              <div>
                <small>Need any help</small>
                <p>
                  Call Us <span>01722222</span>
                </p>
              </div>
              <p>Mirpur DOSH, Dhaka</p>
              <p>info@gmail.com</p>
              <div className="flex gap-3">
                <Link
                  target="_blank"
                  to="https://www.facebook.com/obokashdotcom"
                >
                  <FaFacebook />
                </Link>
                <Link target="_blank" to="https://twitter.com/obokashdotcom">
                  <FaTwitter />
                </Link>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/company/obokash.net/"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div>
              <p className="font-bold pb-2">Company</p>
              <ul>
                {company.map((item) => (
                  <li className="hover:text-[#FF5522]" key={item.id}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold pb-2">Destinations</p>
              <ul>
                {destination.map((item) => (
                  <li className="hover:text-[#FF5522]" key={item.id}>
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p>2023 TOUR UTOPIA All Right Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
