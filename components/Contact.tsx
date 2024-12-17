import { CONTACT } from "@/constants"
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-20 font-inter">
        <h1 className="my-10 text-center text-4xl">Contact Me</h1>
        <div className="flex">
          <div className="flex flex-col lg:flex-row w-full lg:justify-center gap-16 md:gap-20">
            <div className="flex flex-col gap-10">
              <div className="flex gap-3 items-center">
                <FaSquareXTwitter className="text-purple-800 text-3xl" />
                <a className="flex flex-col gap-1" href="https://x.com/callmeuzor" target="_blank">
                  <p className="text-lg font-medium">Twitter Profile</p>
                  <p className="text-neutral-400 text-xs">@callmeuzor</p>
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <FaLinkedin className="text-purple-800 text-3xl" />
                <a className="flex flex-col gap-1" href="https://www.linkedin.com/in/ike-uzoma-charles-946156178/" target="_blank">
                  <p className="text-lg font-medium">LinkedIn Profile</p>
                  <p className="text-neutral-400 text-xs">@callmeuzor_</p>
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <FaTelegram className="text-purple-800 text-3xl" />
                <a className="flex flex-col gap-1" href="https://t.me/uzomacharles" target="_blank">
                  <p className="text-lg font-medium">Telegram Username</p>
                  <p className="text-neutral-400 text-xs">@uzomacharles</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex lg:flex-row flex-col w-full gap-5">
                <div className="flex flex-col gap-2 rounded-lg bg-[#1f1f20] px-4 pb-2 pt-3">
                  <p className="">Name</p>
                  <input type="text" className="outline-none border-0 bg-transparent" />
                </div>
                <div className="flex flex-col gap-2 rounded-lg bg-[#1f1f20] px-4 pb-2 pt-3">
                  <p className="">Email</p>
                  <input type="text" className="outline-none border-0 bg-transparent" />
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-[#1f1f20] px-4 pb-2 pt-3">
                <p className="">What type of app do you need?</p>
                <input type="text" className="outline-none border-0 bg-transparent" />
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-[#1f1f20] px-4 pb-2 pt-3">
                <p className="">Additional message</p>
                <textarea className="outline-none border-0 bg-transparent" rows={3}></textarea>
              </div>
              <div className="flex justify-start">
                <button className="flex bg-purple-800 px-4 py-2 gap-3 rounded items-center text-white">
                  <p className="">Send Message</p>
                  <IoSend className="text-xl" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
