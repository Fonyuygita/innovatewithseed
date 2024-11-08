"use client"

import { useTheme } from '@/components/context/ThemeContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { NextPage } from 'next';
import Link from 'next/link';

const PrivacyPolicy: NextPage = () => {
    const { theme } = useTheme()
    return (
        <>
            <Navbar />
            <div className={`${theme === "light" ? "bg-light-200 text-gray-800" : "bg-gray-900 text-light-300"} container  p-4  pt-[9rem] w-full h-full`}>

                <h4 className='text-sm font-bold mb-4 text-primary-100'>     Last updated: September 16, 2024</h4>

                <p className=' mb-4 text-[12px]'>

                    This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your
                    information when you use the Service. It also tells you about your privacy rights and how the law
                    protects you.
                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                    collection and use of information in accordance with this Privacy Policy
                </p>
                <h1 className="text-3xl font-bold mb-4 text-primary-100">Interpretation and Definitions</h1>

                <h1 className="text-3xl font-bold mb-4 text-primary-100">Interpretation</h1>
                <p className="mb-4 text-[12px]">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions.
                    The following definitions shall have the same meaning regardless of whether they appear singular or
                    plural
                </p>
                <h1 className="text-3xl font-bold mb-4 text-primary-100">Definitions</h1>

                For the purposes of this Privacy Policy:
                <ul className='list-disc text-[13px] py-3'>

                    <li>
                        <span className='text-primary-100'>Account</span> means a unique account created for You to access our Service or parts of our Service.
                    </li>
                    <li>
                        <span className='text-primary-100'>Company</span> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers
                        to Seed.
                    </li>

                    <li>
                        <span className='text-primary-100'>Cookies</span>
                        are small files that are placed on Your computer, mobile device or any other device by a
                        website, containing the details of Your browsing history on that website among its many uses.

                    </li>



                    <li>
                        <span className='text-primary-100'>Country refers to</span>
                        Cameroon
                        Device means any device that can access the Service such as a computer, a cell phone or a
                        digital tablet.

                    </li>

                    <li>
                        <span className='text-primary-100'> Personal Data </span>
                        is any information that relates to an identified or identifiable individual.
                    </li>

                    <li>
                        <span className='text-primary-100'> Service </span>
                        refers to the Website.
                    </li>

                    <li>
                        <span className='text-primary-100'> Service Provider</span>
                        means any natural or legal person who processes the data on behalf of the
                        Company. It refers to third-party companies or individuals employed by the Company to
                        facilitate the Service, to provide the Service on behalf of the Company, to perform services
                        related to the Service or to assist the Company in analyzing how the Service is used.
                    </li>


                    <li>
                        <span className='text-primary-100'>Usage Data </span>
                        refers to data collected automatically, either generated by the use of the Service or
                        from the Service infrastructure itself (for example, the duration of a page visit).
                    </li>

                    <li>
                        <span className='text-primary-100'>Website refers </span>
                        to Innovate with seed, accessible from
                        <Link className='text-blue-500' href="https://innovatewithseed.com/">https://innovatewithseed.com/</Link>
                    </li>

                </ul>






                <h2 className="text-xl text-primary-100 mb-2 my-4">Collecting and Using Your Personal Data
                    Types of Data Collected
                    Personal Data
                </h2>
                <p>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information
                    that can be used to contact or identify You. Personally identifiable information may include, but is not
                    limited to:
                </p>

                <ul className='list-disc text-[13px] py-3'>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Usage Data</li>

                </ul>
                <h2 className="text-xl text-primary-100 mb-2 my-4">
                    Usage Data
                </h2>

                <p className='text-[12px]'>
                    Usage Data is collected automatically when using the Service.
                    Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address),
                    browser type, browser version, the pages of our Service that You visit, the time and date of Your visit,
                    the time spent on those pages, unique device identifiers and other diagnostic data.
                    When You access the Service by or through a mobile device, We may collect certain information
                    automatically, including, but not limited to, the type of mobile device You use, Your mobile device
                    unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile
                    Internet browser You use, unique device identifiers and other diagnostic data.
                    We may also collect information that Your browser sends whenever You visit our Service or when You
                    access the Service by or through a mobile device.
                    Tracking Technologies and Cookies
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
                    information. Tracking technologies used are beacons, tags, and scripts to collect and track information
                    and to improve and analyze Our Service. The technologies We use may include

                </p>


                <h2 className="text-xl text-primary-100 mb-2 my-4">
                    Tracking Technologies and Cookies

                </h2>
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
                information. Tracking technologies used are beacons, tags, and scripts to collect and track information
                and to improve and analyze Our Service. The technologies We use may include:
                <ul className='list-disc text-[13px] py-3'>
                    <li>
                        <span className='text-primary-100'>Cookies or Browser Cookies </span>
                        A cookie is a small file placed on Your Device. You can instruct Your
                        browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not
                        accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted
                        Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                    </li>

                    <li>
                        <span className='text-primary-100'> Flash Cookies.</span>
                        Certain features of our Service may use local stored objects (or Flash Cookies) to
                        collect and store information about Your preferences or Your activity on our Service. Flash
                        Cookies are not managed by the same browser settings as those used for Browser Cookies. For
                        more information on how You can delete Flash Cookies, please read “Where can I change the
                        settings for disabling, or deleting local shared objects?” available
                    </li>

                    <li className='text-blue-500'>
                        {/* <Link href="">
                            at https://helpx.adobe.com/flash-player/kb/disable-local-shared-objectsflash.
                            <br></br>
                            html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_
                            objects
                        </Link> */}
                    </li>


                </ul>

                <h2 className="text-xl text-primary-100 mb-2 my-4">
                    Changes to this Privacy Policy

                </h2>

                <p className="text-sm">
                    We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the
                    new Privacy Policy on this page.
                    We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
                    effective and update the “Last updated” date at the top of this Privacy Policy.
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
                    are effective when they are posted on this page.
                </p>

                <h2 className="text-xl text-primary-100 mb-2 my-4">
                    Contact Us

                </h2>
                If you have any questions about this Privacy Policy, You can contact us:

                <ul className='list-disc text-[13px] py-3'>
                    <li>
                        <span className='text-primary-100'>By email: info@innovatewithseed.com </span>

                    </li>
                    <li>
                        <span className='text-primary-100'>By visiting this page on our website:
                            <Link href="https://innovatewithseed.com/contact" className='text-blue-500'></Link>
                            https://innovatewithseed.com/contact</span>

                    </li>

                    <li>
                        <span className='text-blue-500'>(237) 670 656 000
                        </span>

                    </li>
                </ul>



            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
