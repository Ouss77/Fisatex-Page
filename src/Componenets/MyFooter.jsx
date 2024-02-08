
import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import kiss from "../assets/kiss.jpg";

export default function MyFooter( ) {
  return (
    <Footer container className='bg-red-400'>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div className='space-y-4 mb-8'>
      <a
            href=""
            className="text-3xl font-semibold flex items-center space-x-3"
          >
            <img
              src={kiss}
              alt="logo"
              className="w-16 inline-block items-center"
            />
            <span className="text-[#263238]">Fisatex</span>
          </a>
          <div>
          <p className='mb-1'>Copyright @ 2020 Fisatex ltd.</p>
          <p>All rights reserved</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="about" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Fisatex</Footer.Link>
              <Footer.Link href="#">Gant</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Instagram</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Fisatex" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

