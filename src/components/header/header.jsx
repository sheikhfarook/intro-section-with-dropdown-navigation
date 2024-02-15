import logo from "../../assets/snap.svg";
const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <div>
          <div>Features</div>
          <div></div>
        </div>
        <div>
          <div>Company</div>
          <div></div>
        </div>
        <div>Careers</div>
        <div>About</div>
      </div>
      <div>
        <div>Login</div>
        <div className="">Register</div>
      </div>
    </div>
  );
};

export default Header;
