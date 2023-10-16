import Curs from "../components/curs/page";
import Carti from "../components/Carti/page"
import Footer from "../components/footer/page"
const page = () => {
  return (
    <>
      <header className="bg-[url(../../src/assets/user.png)] w-full h-[960px] bg-no-repeat bg-cover">
        <div className="container mx-auto p-2">
          <div className="pt-[76px]">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M8.87991 1.08803L1 1V30.9659H8.28692L23.7816 11.7124V21.6515L17.3759 24.0993L23.7984 31H31V1.00004H23.7849L16.2506 10.8942L8.87991 1.08803Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M11.6618 16.9684L8.28589 21.4113V12.5213L11.6618 16.9684Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </g>
            </svg>
          </div>
          <div className="mt-[145px]  cursor-pointer">
            {" "}
            <h1 className="story_h1 text-[43px] w-[493px] font-bold leading-normal mb-5 text-white">
              Abdukarim Mirzayev bilan{" "}
              <span className="text-[#00E689]">storytelling</span> kursi...
            </h1>
            <p className="text-[#FFF] leading-6 w-[423px] mb-[40px] h-[72px]">
              Ushbu kurs yordamida jozibali gapirish, sahnada va kamera
              qarshisida hayajonlanmaslik, vizual kompozitsiya va ovozlashtirish
              sirlarini bilib olasiz.
            </p>
            <button className="bg-[#FAA40C] items-center gap-x-[5px] pl-[25px] py-[14px] pr-[21px] font-bold flex ">
              Guruhga qo’shilish{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_12_26)">
                    <path
                      d="M3.95825 7.5H15.0416"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2917 11.25L15.0417 7.5"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2917 3.75L15.0417 7.5"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12_26">
                      <rect width="19" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>
      <main>
        <section id="video" className="py-[80px] mb-[80px] ">
          <div className="container mx-auto bg-slate-200 ">
          <div className="flex items-center justify-center">
          <div id="video-container">
        <iframe  width="1040" height="565" src="https://www.youtube.com/embed/5genCcH8KHU" frameborder="0" allowfullscreen></iframe>
    </div>
            </div>
          </div>
        </section>
     
        <Curs />
        <Carti/>

        
      </main>
      <Footer/>
    </>
  );
};

export default page;
