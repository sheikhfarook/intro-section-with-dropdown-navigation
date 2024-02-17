import databiz from "../../assets/databiz.svg";
import audio from "../../assets/audiophile.svg";
import meet from "../../assets/meet.svg";
import maker from "../../assets/maker.svg";
import hero from "../../assets/image-hero-desktop.png";
import hero2 from "../../assets/image-hero-mobile.png";

const RemoteWork = () => {
  return (
    <div className="flex justify-between mb-10 max-sm:flex-col-reverse md:flex-col-reverse md:mx-[10%] lg:flex-row">
      <div
        className="mt-[6rem] font-epilogue space-y-[6.5rem] max-sm:mx-[5%] max-sm:text-center max-sm:space-y-[3rem] max-sm:mt-12 md:text-center 
        lg:text-left ">
        <div className="md:space-y-14   ">
          <div
            className="font-[700] tracking-[-1.1111112px] max-sm:text-[36px] max-sm:tracking[-10.5px] md:text-[40px] md:w-[400px] md:m-auto 
            md:leading-[40px] lg:w-[270px] lg:m-0 xl:w-[530px] xl:h-[161px] xl:leading-[90px] xl:text-[80px]">
            Make remote work
          </div>
          <div
            className="text-[#686868] font-[500] leading-[28px] max-sm:text-[16px] max-sm:mt-4 md:w-[600px] md:m-auto lg:m-0 lg:w-[330px] 
          lg:h-[84px] lg:text-[15px] xl:w-[445px] xl:text-[18px]">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </div>
          <div
            className="w-[163px] h-[56px] rounded-[15px] bg-[#151515] text-[#FaFaFa] text-center tracking-[-0.25px] py-[16px] text-[18px] 
            font-[700] cursor-pointer hover:bg-[#FFF] hover:text-[#000] hover:border-[1px] border-[#000] max-sm:m-auto max-sm:w-[163px] 
            max-sm:h-[48px] max-sm:mt-6 max-sm:py-[11px] md:m-auto lg:m-0      
          ">
            Learn more
          </div>
        </div>
        <div className="grid gap-10 items-center max-sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 ">
          <div>
            <img
              className="
              "
              src={databiz}
              alt=""
            />
          </div>
          <div>
            <img src={audio} alt="" />
          </div>
          <div>
            <img src={meet} alt="" />
          </div>
          <div>
            <img src={maker} alt="" />
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-[480px] h-[640px] max-sm:hidden md:m-auto lg:m-0"
          src={hero}
          alt=""
        />
        <img className="w-[375px] h-[281.125px] md:hidden" src={hero2} alt="" />
      </div>
    </div>
  );
};

export default RemoteWork;
