import photo1 from "../../Assets/office-1.jpg";
import photo2 from "../../Assets/vision.jpg";

function WhoWeAre() {
  return (
    <div className="bg-secondary">
      <div className="text-container mx-auto px-[10px] text-white">
        <div className="relative sm:w-[80%] w-full mx-auto top-[-100px]">
          <div className=" flex md:flex-row flex-col bg-[#222222] ">
            <img
              src={photo1}
              alt="office"
              className="bg-cover md:w-[50%] w-full"
            />

            <div className="flex  justify-center flex-col md:p-[50px] p-[30px]">
              <h2 className="sm:text-3xl text-2xl uppercase font-bold mb-[10px]">
                Who We Are
              </h2>
              <p className="text-gray">
                New Capital is a real estate consultancy company proudly serving
                thousands of satisfied clients and partnering with the top real
                estate developers in Egypt.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col-reverse  mt-[30px] bg-[#222222] ">
            <div className="flex  justify-center flex-col md:p-[50px] p-[30px]">
              <h2 className="sm:text-3xl text-2xl uppercase font-bold mb-[10px]">
                Our Vision
              </h2>
              <p className="text-gray">
                Achieve the highest possible standards in the real estate field
                while establishing our company as the preferred real estate
                consultancy in Egypt.
              </p>
            </div>

            <img
              src={photo2}
              alt="vision"
              className="bg-cover md:w-[50%] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
