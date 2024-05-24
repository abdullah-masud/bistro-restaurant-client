import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";

const ChefRecommends = () => {
  return (
    <div className="mb-24">
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>

      <div className="flex gap-6">
        <div className="card card-compact h-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-full" src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">Caeser Salad</h2>
            <p className="text-center py-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.{" "}
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-[#E8E8E8] text-[#BB8506]">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact h-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-full" src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">Caeser Salad</h2>
            <p className="text-center py-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.{" "}
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-[#E8E8E8] text-[#BB8506]">
                ADD TO CART
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="card card-compact h-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-full" src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">Caeser Salad</h2>
            <p className="text-center py-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.{" "}
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-[#E8E8E8] text-[#BB8506]">
                ADD TO CART
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
