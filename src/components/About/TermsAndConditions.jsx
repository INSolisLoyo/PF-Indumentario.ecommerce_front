import React, { useState, useEffect } from "react";

const TermsAndConditions = ({setSectionPartsAbout}) => {

    const [ sectionMain, setSectionMain ] = useState(['Terms and Conditions'])
    const [ sectionParts , setSectionParts ] = useState([
        'Cookies', 'License', 'You must not', 'Reservation of Rights', 'Removal of links from our website', 'Content Liability', 'Changes to Terms and Conditions', 'Contact Us' 
    ])

    useEffect(() => {
        setSectionPartsAbout([...sectionMain, ...sectionParts])
    }, [])

    return (

        <section className="w-11/12 md:w-9/12 mx-auto font-RedHat flex flex-col gap-6 text-justify">

            <article>

                <h1 className="text-center text-2xl text-[#ae5e48] mb-4">{sectionMain}</h1>
                <p>Welcome to BeComfree! These terms and conditions outline the rules and regulations for the use of BeComfree's Website.</p>

                <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use BeComfree if you do not agree to take all of the terms and conditions stated on this page.</p>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[0]}</h2>
                <p>We employ the use of cookies. By accessing BeComfree, you agreed to use cookies in agreement with BeComfree's Privacy Policy.</p>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[1]}</h2>
                <p>Unless otherwise stated, BeComfree and/or its licensors own the intellectual property rights for all material on BeComfree. All intellectual property rights are reserved. You may access this from BeComfree for your own personal use subjected to restrictions set in these terms and conditions.</p>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[2]}</h2>
                <ul>
                   <li>Republish material from BeComfree</li> 
                   <li>Sell, rent or sub-license material from BeComfree</li> 
                   <li>Reproduce, duplicate or copy material from BeComfree</li>
                   <li>Redistribute content from BeComfree</li>
                </ul>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[3]}</h2>
                <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[4]}</h2>
                <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[5]}</h2>
                <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[6]}</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            </article>

            <article>

                <h2 className="text-center text-xl text-[#ae5e48] mb-4">{sectionParts[7]}</h2>
                <p>If you have any questions about these Terms, please contact us.</p>
                <p>By creating an account or making a purchase on BeComfree, you acknowledge that you have read and understood these terms and conditions and agree to be bound by them.</p>

            </article>
        </section>
    )
}

export default TermsAndConditions;