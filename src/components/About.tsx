import bg from '@/assets/pinkbg.png';
import handwrittenAbout from '@/assets/about-about-about.png';
import polaroid from '@/assets/polaroid.png';

const About = () => {
  return (
    <section
      id="about"
      className="h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-44 lg:pr-36 h-full flex items-center">
        <div className="grid grid-cols-5 gap-8 items-center">
          {/* Left side - takes up 2 columns */}
          <div className="relative w-fit col-span-2">
            <img
              src={handwrittenAbout}
              alt=""
              className="absolute -top-20 -left-8 h-[310px] select-none pointer-events-none"
              style={{ zIndex: 10 }}
              aria-hidden="true"
            />
            <h2 className="text-8xl font-extrabold leading-[0.9] relative z-10 text-gray-600/80">
              about.
              <br />
              about.
              <br />
              about.
            </h2>
          </div>

          {/* Right side content - takes up 3 columns */}
          <div className="col-span-3 space-y-10 text-gray-600 text-3xl font-extralight pl-16 relative">
            {/* Polaroid photo in top right corner */}
            {/* <div className="absolute top-32 -right-20 transform rotate-[14deg] z-10">
              <div className="relative">
                <img
                  src={polaroid}
                  alt="Polaroid photo"
                  className="h-80 object-cover"
                  style={{ zIndex: 20 }}
                />
                <div className="absolute inset-0 bg-[#FED6D7]/30"></div>
              </div>
            </div> */}
            <p className="relative z-20">i'm a student at <span className="italic text-white font-light">western university</span> pursuing <span className="italic text-white font-light">computer science</span> (hsp) with ivey aeo.</p>
            <p className="font-thin relative z-20">whether it's learning a <span className="italic font-extralight">new language</span> or diving down a rabbit hole of <span className="italic font-extralight">unusual hobbies</span>, you'll always find me <span className="italic font-extralight">pushing my limits</span> and <span className="italic font-extralight">keeping myself busy.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;