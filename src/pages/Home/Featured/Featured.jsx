import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white font-semibold mb-24 pt-8 ">
      <div className="featured-overlay"></div>
      <div className="relative z-10">
        <SectionTitle subHeading={"Check it out"} heading={"Featured Item"} />{" "}
      </div>
      <div className="featured-content md:flex justify-center items-center pb-20 pt-12 px-36 ">
        <div>
          <img className="rounded" src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where I can get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            repellat veritatis adipisci at ut ipsum et officia explicabo quo
            corporis mollitia est laudantium labore iusto, quod perferendis
            aliquam tenetur iure molestiae ducimus non dolores ratione totam!
            Pariatur ab commodi labore dolorem, sit dolorum. Officiis iure
            consectetur ut, dolore facere omnis?
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
