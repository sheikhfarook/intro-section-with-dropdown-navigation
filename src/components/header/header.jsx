import logo from "../../assets/snap.svg";

const Header = () => {
  return (
    <div
      className="flex justify-between gap-10 m-[3%] font-epilogue
    text-[14px] font-[500] text-[#686868]">
      <div className="flex gap-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-10">
          <div>
            <div className="cursor-pointer hover:text-[#151515]">Features</div>
          </div>
          <div>
            <div className="cursor-pointer hover:text-[#151515]">Company</div>
            <div></div>
          </div>
          <div className="cursor-pointer hover:text-[#151515]">Careers</div>
          <div className="cursor-pointer hover:text-[#151515]">About</div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="ml-auto cursor-pointer hover:text-[#151515]">Login</div>
        <div
          className="cursor-pointer w-[104px] h-[42px] py-[8.9px] mt-[-10px] text-center 
          rounded-[14px] border-[#686868] border-[1.5px] hover:text-[#151515] 
          hover:border-[#151515] ">
          Register
        </div>
      </div>
    </div>
  );
};

export default Header;
