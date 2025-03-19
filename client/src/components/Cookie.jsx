import React from "react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-yellow-500 w-full flex flex-col items-center py-8">
        <h2 className="text-3xl font-semibold text-center">Cookies Policy</h2>
        <p className="mt-2 text-gray-700">Last updated: March 18, 2025</p>
      </div>

      {/* Content Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-3xl w-full mt-6">
        <p>
        This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.  

        Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy. 

        We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use. 
        </p>

        <h3 className="text-xl font-bold mt-6">Interpretation and Definitions</h3>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural. </p>

        <h3 className="text-xl font-bold mt-6">Definitions</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Company</strong>: Pentacloud Consulting, Jagan Arcade, 4th Floor, Anandnagar, Bengaluru, Karnataka.
          </li>
          <li>
            <strong>Cookies</strong>: Small files stored on your device, containing browsing details.
          </li>
          <li>
            <strong>Website</strong>: <a href="https://pentacloudconsulting.com" className="text-blue-600">pentacloudconsulting.com</a>
          </li>
          <li>
            <strong>You</strong>: The individual using the Website.
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6">Type of Cookies We Use</h3>
        <p>Cookies can be "Persistent" or "Session". We use both types:</p>

        <div className="mt-4">
          <h4 className="font-semibold">Necessary / Essential Cookies</h4>
          <p className="text-gray-600 text-sm"> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services. </p>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Functionality Cookies</h4>
          <p className="text-gray-600 text-sm">
          These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website. 
          </p>
        </div>

        <h3 className="text-xl font-bold mt-6">Your Choices Regarding Cookies</h3>
        <p>
        If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time. 
        </p>

        <h3 className="text-xl font-bold mt-6">More Information</h3>
        <p>
          For details, visit{" "}
          <a href="https://www.allaboutcookies.org/" className="text-blue-600">All About Cookies</a>.
        </p>

        <h3 className="text-xl font-bold mt-6">Contact Us</h3>
        <p>Email: <a href="mailto:contactus@pentacloudconsulting.com" className="text-blue-600">contactus@pentacloudconsulting.com</a></p>
        <p>Phone: +91-7996363343</p>
      </div>
    </div>
  );
};

export default CookiePolicy;
