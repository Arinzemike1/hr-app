import Link from "next/link";
import { RxCaretUp } from "react-icons/rx";
const Footer = () => {
  return (
    <footer className="bg-[#222] mt-10">
      <div className="flex flex-wrap justify-start xl:justify-around py-16 gap-10 xl:gap-5 px-10 xl:px-[161px] text-white">
        <div>
          <Link href="/">
            <h2 className="font-bold uppercase text-lg">
              hr mentor
            </h2>
          </Link>
          <p className="text-sm md:w-[339px] font-medium leading-6 mt-5">
            HR Mentor redefines workforce management by simplifying recruitment,
            onboarding, and employee development. Empower your team with
            cutting-edge tools that drive engagement and enhance business
            productivity.
            <Link href="#" className="underline">
              Sign up now!
            </Link>
          </p>
        </div>
        <div>
          <ul className="text-sm list-none leading-10 p-0 m-0">
            <li className="font-semibold pb-2">Developers</li>
            <Link href="#">
              <li>Overview</li>
            </Link>
            <Link
              href="#"
            >
              <li>Documentation</li>
            </Link>

            <Link href="#">
              <li>Integrations</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="text-sm list-none leading-10 p-0 m-0">
            <li className="font-semibold pb-2">Support</li>
            <Link href="#">
              <li>FAQ</li>
            </Link>
            <Link href="#">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="text-sm list-none leading-10 p-0 m-0">
            <li className="font-semibold pb-2">Information</li>
            <Link href="#about">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="text-sm list-none leading-10 p-0 m-0">
            <li className="font-semibold pb-2">Legal</li>
            <Link href="#">
              <li>Privacy Policy</li>
            </Link>

            <Link href="#">
              <li>Terms & Conditions</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="px-10 py-6 text-white">
        <div className="flex justify-between border-t-2 pt-6">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Hr Mentor. All Rights Reserved
          </p>
          <div>
            <Link href="#top">
              <div className="flex items-center gap-2">
                <RxCaretUp />
                <p className="text-sm font-medium">Back to Top</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
