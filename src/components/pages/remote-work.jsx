import databiz from "../../assets/databiz.svg";
import audio from "../../assets/audiophile.svg";
import meet from "../../assets/meet.svg";
import maker from "../../assets/maker.svg";
import hero from "../../assets/image-hero-desktop.png";
import hero2 from "../../assets/image-hero-mobile.png";

const RemoteWork = () => {
  return (
    <div className="flex justify-between max-sm:flex-col-reverse md:mx-[10%]">
      <div
        className="mt-[6rem] font-epilogue space-y-[6.5rem] 
        max-sm:mx-[5%] max-sm:text-center max-sm:space-y-[3rem] max-sm:mt-12  ">
        <div className="md:space-y-14   ">
          <div
            className="md:w-[530px] md:h-[161px] text-[80px] font-[700] tracking-[-1.1111112px] 
          max-sm:text-[36px] max-sm:tracking[-10.5px] md:leading-[90px]">
            Make remote work
          </div>
          <div
            className="text-[#686868] text-[18px] font-[500] leading-[28px] 
          max-sm:text-[16px] max-sm:mt-4 md:w-[445px] md:h-[84px] ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </div>
          <div
            className="w-[163px] h-[56px] rounded-[15px] bg-[#151515] text-[#FaFaFa]
          text-center tracking-[-0.25px] py-[16px] text-[18px] font-[700] cursor-pointer 
          hover:bg-[#FFF] hover:text-[#000] hover:border-[1px] border-[#000]
          max-sm:m-auto max-sm:w-[163px] max-sm:h-[48px] max-sm:mt-6 max-sm:py-[11px]        
          ">
            Learn more
          </div>
        </div>
        <div className="flex gap-10 items-center">
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
        <img className="w-[480px] h-[640px] max-sm:hidden" src={hero} alt="" />
        <img className="w-[375px] h-[281.125px] md:hidden" src={hero2} alt="" />
      </div>
    </div>
  );
};

export default RemoteWork;
