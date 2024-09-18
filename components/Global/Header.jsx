import Logo from "./Logo";
import SecondaryButton from "./SecondaryButton";

const Header = () => {
  return (
    <header
      className="h-[80px] bg-purple-950/10  backdrop-blur-[200px] fixed top-0 left-0 right-0 z-10
    flex items-center"
    >
      {/* LOGO */}
      <div className="container mx-auto flex justify-between items-center px-6 xl:px-0">
        <Logo />
        <SecondaryButton btnText="ابدأ الان" />
      </div>
    </header>
  );
};

export default Header;
