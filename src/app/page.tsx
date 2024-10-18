import Image from "next/image";
import Link from "next/link";
import WebPageTitle from "./components/WebPageTitle";
import Header from "./components/Header";
import aboutUs from "../app/public/images/about-us.jpg";
import heroImage from "../app/public/images/hero-image.png";
import Footer from "./components/Footer";
import { HiReceiptTax } from "react-icons/hi";
import { GrDocumentPerformance } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";

export const records = [
  {
    id: 1,
    count: "4",
    title: "Years of Experience",
  },
  {
    id: 2,
    count: "10+",
    title: "Countries",
  },
  {
    id: 3,
    count: "1.4k",
    title: "Positive Reviews",
  },
  {
    id: 4,
    count: "20+",
    title: "Trusted companies",
  },
];

export const services = [
  {
    id: 1,
    icon: <HiReceiptTax />,
    title: "Talent Acquisition & Onboarding",
    description:
      "Effortlessly attract, screen, and hire top talent with our streamlined recruitment tools. From posting job openings to automating onboarding processes, we help you build a strong workforce and get new hires up to speed.",
  },
  {
    id: 1,
    icon: <GrDocumentPerformance />,
    title: "Employee Performance & Development",
    description:
      "Unlock your team's potential with continuous performance tracking and personalized development plans. Our platform offers tools for setting goals, conducting evaluations, and identifying growth opportunities.",
  },
  {
    id: 1,
    icon: <TbSettingsAutomation />,
    title: "HR Automation & Compliance",
    description:
      "Simplify everyday HR tasks like payroll, leave management, and compliance tracking with automated workflows. Stay organized, ensure legal compliance, and reduce administrative burdens.",
  },
];

export default function Home() {
  return (
    <>
      <WebPageTitle title="HR App | Shamzbridge Consult" />
      <div>
        <Header />

        <section className="pt-[110px] md:pt-[120px] xl:pt-[150px] pb-16 md:pb-36">
          <div className="flex justify-center flex-col xl:flex-row text-center xl:text-left items-center gap-5 px-2">
            <div className="w-full md:w-[576px]" data-aos="fade-up">
              <h1 className="text-3xl xl:text-5xl font-bold leading-[43px] xl:leading-[60px] w-full xl:w-[533px] text-[#212121]">
                Empowering Your Workforce,{" "}
                <span className="text-primary">Elevating</span> Your Business
              </h1>
              <p className="text-base font-normal pt-2 md:pt-7 leading-7 w-full md:w-[574px] px-5 md:px-0">
                Streamline HR, engage your team, and unlock the full potential
                of your organization with our all-in-one HR platform.
              </p>
              <Link href="#">
                <button className="border border-primary hover:bg-primary hover:text-white h-[45px] mt-5 text-primary rounded-md text-sm cursor-pointer px-10">
                  Get Started
                </button>
              </Link>
            </div>

            <div className="hidden md:block" data-aos="fade-down">
              <Image
                src={heroImage}
                width={600}
                height={500}
                className="rounded-lg shadow-sm"
                alt="Hero image"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="flex justify-center items-center bg-[#222] rounded-e-2xl rounded-s-2xl mx-5 py-20 scroll-mt-20"
        >
          <div className="flex flex-col md:flex-row gap-20 px-5 xl:px-0">
            <div className="flex flex-col justify-between w-full md:w-[500px] text-white">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-[50px] font-semibold md:w-[400px]">
                  Mission
                </h2>
                <p className="pt-5 leading-8">
                  To empower businesses by simplifying HR processes and creating
                  a seamless, user-friendly platform that enhances workforce
                  management, employee engagement, and productivity. We are
                  committed to helping organizations of all sizes unlock their
                  full potential by providing innovative tools that drive growth
                  and foster a positive workplace culture.
                </p>
              </div>

              <div className="mt-10 xl:mt-0" data-aos="fade-right">
                <h2 className="text-3xl md:text-[50px] font-semibold md:w-[400px]">
                  Vision
                </h2>
                <p className="pt-5 leading-8">
                  To be the global leader in human resource technology,
                  transforming the way businesses manage and engage their
                  employees. We envision a future where HR is effortless,
                  strategic, and people-focused—helping companies build
                  thriving, high-performing teams that drive long-term success.
                </p>
              </div>
            </div>

            <div className="flex flex-col" data-aos="fade-left">
              <div>
                <Image
                  src={aboutUs}
                  width={500}
                  height={500}
                  className="rounded-lg"
                  alt="About Us image"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5">
                {records.map((record) => (
                  <div
                    key={record.id}
                    className="bg-white p-5 rounded-lg cursor-pointer"
                  >
                    <p className="text-2xl font-bold">{record.count}</p>
                    <p className="text-sm font-medium">{record.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="flex flex-col justify-center items-center rounded-e-2xl rounded-s-2xl mx-10 py-20 scroll-mt-14"
        >
          <h2 className="font-medium text-xl">Our Services</h2>
          <p className="text-2xl md:text-4xl font-bold w-[400px] text-center mt-3" data-aos="fade-in">
            Here&apos;s what you get when you{" "}
            <span className="text-primary">work</span> with us
          </p>

          <div className="grid lg:grid-cols-3 gap-5 mt-20">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 shadow-sm rounded-lg p-5 cursor-pointer"
                data-aos="fade-up"
              >
                <span className="text-4xl">{service.icon}</span>
                <p className="font-semibold text-xl md:text-2xl w-[80%] py-3">
                  {service.title}
                </p>
                <p className="font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
