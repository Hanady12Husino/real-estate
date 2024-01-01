import AnimationWrapper from '../components/AnimationWrapper';
import { Link } from 'react-router-dom';
const Terms = () => {
  return (
    <AnimationWrapper>
      <div className="py-20 px-4 max-w-6xl mx-auto min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-emerald-900">
          Terms & Conditions
        </h1>
        <p className="mb-4 text-emerald-800">
          Welcome to Home Real Estate Agency. Please read these terms and
          conditions carefully before using our website,{' '}
          <Link
            className="underline text-emerald-500"
            to="/"
          >
            {' '}
            www.real-estate-agency.com{' '}
          </Link>
          .<br /> By accessing or using the Site, you agree to comply with and
          be bound by these terms. If you do not agree with any part of these
          terms, please do not use the Site.
        </p>
        <h2 className="mb-4 text-emerald-800">1- Acceptance of Terms:</h2>
        <p className="mb-4 text-emerald-800">
          By accessing the Site, you agree to be bound by these Terms and
          Conditions. We reserve the right to modify or revise these terms at
          any time without notice, and your continued use of the Site after such
          changes constitutes your acceptance of the new terms.
        </p>
        <h2 className="mb-4 text-emerald-800">2- Use of the Site:</h2>
        <p className="mb-4 text-emerald-800">
          You may use the Site for personal and non-commercial purposes only.{' '}
          <br />
          You may not use the Site for any illegal or unauthorized purpose, and
          you agree to comply with all applicable laws and regulations.
        </p>
        <h2 className="mb-4 text-emerald-800">3- Intellectual Property:</h2>
        <p className="mb-4 text-emerald-800">
          All content on the Site, including text, graphics, logos, images, and
          software, is the property of Home Real Estate Agency or its licensors
          and is protected by intellectual property laws. <br />
          You may not reproduce, distribute, display, or create derivative works
          from any content on the Site without our prior written consent.
        </p>

        <h2 className="mb-4 text-emerald-800">4- Privacy Policy:</h2>
        <p className="mb-4 text-emerald-800">
          Your use of the Site is also governed by our Privacy Policy, which is
          incorporated by reference into these Terms and Conditions. <br />
          Please review our Privacy Policy to understand our practices regarding
          the collection and use of your personal information.
        </p>
        <h2 className="mb-4 text-emerald-800">
          5- Links to Third-Party Sites:
        </h2>
        <p className="mb-4 text-emerald-800">
          The Site may contain links to third-party websites. These links are
          provided for your convenience only.
          <br /> We do not control or endorse any third-party sites, and we are
          not responsible for their content or practices. Your use of
          third-party websites is at your own risk.
        </p>
        <h2 className="mb-4 text-emerald-800">6- Limitation of Liability:</h2>
        <p className="mb-4 text-emerald-800">
          Home Real Estate Agency and its affiliates, officers, directors,
          employees, agents, and licensors are not liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss
          of profits or revenues, whether incurred directly or indirectly.
        </p>
        <h2 className="mb-4 text-emerald-800">7- Termination:</h2>
        <p className="mb-4 text-emerald-800">
          We reserve the right to terminate or suspend your access to the Site
          at our discretion, without notice, for any reason, including without
          limitation, if you breach these Terms and Conditions.
        </p>
        <h2 className="mb-4 text-emerald-800">8- Contact Information:</h2>
        <p className="mb-4 text-emerald-800">
          If you have any questions or concerns about these Terms and
          Conditions, please contact us from{' '}
          <Link
            className="underline text-emerald-500"
            to={'/contact-us'}
          >
            Contact Page{' '}
          </Link>
          .
        </p>
        <p className="mb-4 text-emerald-800">
          By using the Site, you acknowledge that you have read, understood, and
          agree to be bound by these Terms and Conditions.
          <br /> Thank you for visiting Home Real Estate Agency.
        </p>
      </div>
    </AnimationWrapper>
  );
};

export default Terms;
