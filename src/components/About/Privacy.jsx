import React, { useState, useEffect } from "react";

const Privacy = ({setSectionPartsAbout}) => {

    const [ sectionMain, setSectionMain ] = useState(['Privacy Policy'])
    const [ sectionParts , setSectionParts ] = useState(['Collection and Use of Information', 'Security of Information', 'Disclosure of Information', 'Links to Other Websites', 'Changes to this Privacy Policy', 'Contact'])

    useEffect(() => {
        setSectionPartsAbout([...sectionMain, ...sectionParts])
    }, [])

    return (

        <section className="w-11/12 md:w-9/12 mx-auto font-RedHat flex flex-col gap-6 text-justify">

            <article>

                <h1 className="text-center text-2xl text-[#ae5e48] mb-4">{sectionMain}</h1>
                <p>At BeComfree, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by BeComfree and how we use it.</p>

                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[0]}</h2>
                <p>When you visit our website, we may collect certain information about your device, including your IP address, browser type, pages visited, and the time and date of your visit. This information is used to enhance the user experience and to track website usage.</p>
                <p>Additionally, if you choose to make a purchase or register on our site, we may collect personal information such as your name, email address, mailing address, and payment details. This information is used to process your orders, provide customer support, and communicate with you about promotions and updates.</p>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[1]}</h2>
                <p>We are committed to protecting the security of your personal information and use appropriate security measures to safeguard it against unauthorized access, disclosure, or alteration.</p>
                

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[2]}</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except when necessary to comply with the law or to protect our rights, property, or safety.</p>
                

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[3]}</h2>
                <p>Our website may contain links to other websites that are not operated by us. We have no control over the content, privacy policies, or practices of these third-party websites and assume no responsibility for them.</p>
                

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[4]}</h2>
                <p>We reserve the right to update or modify our Privacy Policy at any time. Any significant changes will take effect immediately upon posting on this page.</p>
                

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[5]}</h2>
                <p>If you have any questions or concerns about our Privacy Policy, please feel free to contact us.</p>
                

            </article>


           
        </section>
    )
}

export default Privacy;