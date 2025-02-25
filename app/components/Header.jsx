import HeaderIllustration from "../../public/images/header-illustration.svg";
import BelowButtonIllustration from "../../public/images/button-below.svg";
import BelowHeaderIllustration from "../../public/images/header-below.svg";
import GroupDiamond from "../../public/images/group-diamond.svg";
import Navigation from "../components/Navigation";

function Header() {
  return (
    <div className=" bg-albyYellow-300 lg:min-h-screen grid place-items-center relative">
      <div className="lg:w-[93.194%] w-[91.46%] mx-auto">
        <Navigation />
        <img
          src={BelowButtonIllustration}
          alt=""
          className="absolute w-auto hidden lg:inline-block top-0 right-0"
        />
        <div className="md:px-20 px-0 flex flex-col lg:flex-row items-center lg:items-[inherit] justify-between font-primary pt-[1rem] lg:pt-0">
          <div className="xl:max-w-[39.75rem] lg:w-1/2 text-albyColdGray-800 text-left">
            <h1 className="xl:text-6xl md:text-4xl text-3xl font-black">
              Direct contributions from your audience
            </h1>
            <p className="lg:text-2xl text-base font-normal pt-9">
              Use a Lightning Address to receive value for value payments in
              Bitcoin from your audience
            </p>
          </div>
          <div className="pt-10 lg:pt-24">
            <img
              src={HeaderIllustration}
              alt="Alby screenshot"
              className="mx-auto min-w-[17rem] h-auto z-10 relative"
            />
            <img
              src={BelowHeaderIllustration}
              alt=""
              className="absolute w-auto hidden lg:inline-block left-[88%] top-[74.5%] z-0"
            />
          </div>
        </div>
      </div>
      <img
        src={GroupDiamond}
        alt=""
        className="absolute w-auto  left-0 bottom-0 z-0 hidden lg:inline-block"
      />
    </div>
  );
}

export default Header;
