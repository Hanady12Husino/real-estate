import AnimationWrapper from '../components/AnimationWrapper';

const About = () => {
  return (
    <AnimationWrapper>
      <div className="py-20 px-4 max-w-6xl mx-auto min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-emerald-900">
          About Home Real Estate Agency
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex-1">
            <p className="mb-4 text-emerald-800">
              Home Real Estate Agency is a leading real estate agency that
              specializes in helping clients buy, sell, and rent properties in
              the most desirable neighborhoods. Our team of experienced agents
              is dedicated to providing exceptional service and making the
              buying and selling process as smooth as possible.
            </p>
            <p className="mb-4 text-emerald-800">
              Our mission is to help our clients achieve their real estate goals
              by providing expert advice, personalized service, and a deep
              understanding of the local market. Whether you are looking to buy,
              sell, or rent a property, we are here to help you every step of
              the way.
            </p>
            <p className="mb-4 text-emerald-800">
              Our team of agents has a wealth of experience and knowledge in the
              real estate industry, and we are committed to providing the
              highest level of service to our clients. We believe that buying or
              selling a property should be an exciting and rewarding experience,
              and we are dedicated to making that a reality for each and every
              one of our clients.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/real-estate-agency-ee78e.appspot.com/o/17036089250321693270025466home-2.jpeg?alt=media&token=0838cacc-2b6c-4077-a7bc-db1fdc1d7834"
                alt="Our Images"
                className="w-60 h-60 rounded-lg"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/real-estate-agency-ee78e.appspot.com/o/17036089250341693100979177luxury-home-with-amazing-view-0.png?alt=media&token=df8990f9-bd93-4d77-ac98-e8abfd59cbfd"
                alt=""
                className="w-60 h-60 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default About;
