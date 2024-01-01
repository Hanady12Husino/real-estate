import AnimationWrapper from '../components/AnimationWrapper';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <AnimationWrapper>
      <div className="py-20 px-4 max-w-6xl mx-auto min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-emerald-900">
          Privacy Policy
        </h1>
        <p className="mb-4 text-emerald-800">
          Welcome to Home Real Estate Agency. This Privacy Policy outlines how
          we collect, use, disclose, and protect your personal information when
          you visit our website,
          <Link
            className="underline text-emerald-500"
            to="/"
          >
            {' '}
            www.real-estate-agency.com{' '}
          </Link>
          .<br /> By accessing or using the Site, you consent to the practices
          described in this Privacy Policy.
        </p>
        <h2 className="mb-4 text-emerald-800">1- Information We Collect:</h2>
        <p className="mb-4 text-emerald-800">
          We collect personal information that you voluntarily provide to us,
          such as your name, email address, phone number, and any other
          information you submit through forms on the Site.
        </p>
        <h2 className="mb-4 text-emerald-800">
          2- Automatically Collected Information:
        </h2>
        <p className="mb-4 text-emerald-800">
          We may also automatically collect certain information when you visit
          the Site, including your IP address, browser type, operating system,
          and other usage information.
          <br /> This information helps us improve the functionality and
          performance of the Site.
        </p>
        <h2 className="mb-4 text-emerald-800">3- Cookies:</h2>
        <p className="mb-4 text-emerald-800">
          The Site may use cookies and similar technologies to enhance your
          experience. <br />
          Cookies are small text files that are stored on your device. You can
          manage your cookie preferences through your browser settings.
        </p>

        <h2 className="mb-4 text-emerald-800">
          4- How We Use Your Information:
        </h2>
        <p className="mb-4 text-emerald-800">
          We use your personal information to provide and improve our services,
          respond to your inquiries, send newsletters or promotional materials,
          and customize your experience on the Site. <br /> We do not sell or
          rent your personal information to third parties.
        </p>
        <h2 className="mb-4 text-emerald-800">5- Third-Party Links:</h2>
        <p className="mb-4 text-emerald-800">
          The Site may contain links to third-party websites. <br /> We are not
          responsible for the privacy practices or content of these third-party
          sites. We encourage you to review the privacy policies of any
          third-party sites you visit.
        </p>
        <h2 className="mb-4 text-emerald-800">6- Security:</h2>
        <p className="mb-4 text-emerald-800">
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. <br />{' '}
          However, no method of transmission over the internet or electronic
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        <h2 className="mb-4 text-emerald-800">7- Children's Privacy:</h2>
        <p className="mb-4 text-emerald-800">
          The Site is not intended for individuals under the age of 13. We do
          not knowingly collect personal information from children. <br /> If
          you are a parent or guardian and believe your child has provided us
          with personal information, please contact us, and we will take steps
          to delete it.
        </p>
        <h2 className="mb-4 text-emerald-800">
          8- Changes to this Privacy Policy:
        </h2>
        <p className="mb-4 text-emerald-800">
          We may update this Privacy Policy from time to time. The date of the
          latest revision will be indicated at the top of this page. <br /> Your
          continued use of the Site after any changes to this Privacy Policy
          constitutes your acceptance of the updated terms.
        </p>
        <h2 className="mb-4 text-emerald-800">9- Contact Information:</h2>
        <p className="mb-4 text-emerald-800">
          If you have any questions or concerns about these Terms and
          Conditions, please contact us from{' '}
          <span className="underline text-emerald-500">
            <Link
              className="underline text-emerald-500"
              to={'/contact-us'}
            >
              Contact Page{' '}
            </Link>
          </span>
          .
        </p>
        <p className="mb-4 text-emerald-800">
          By using the Site, you acknowledge that you have read, understood, and
          agree to be bound by this Privacy Policy. <br />
          Thank you for trusting Home Real Estate Agency with your information.
        </p>
      </div>
    </AnimationWrapper>
  );
};

export default PrivacyPolicy;
