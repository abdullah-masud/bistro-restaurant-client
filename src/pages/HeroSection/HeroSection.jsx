import chefimage from "../../assets/home/chef-service.jpg";
const HeroSection = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-center mb-24"
      style={{ backgroundImage: `url(${chefimage})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center w-4/5 text-black p-16 bg-white ">
          <h1 className="text-3xl uppercase mb-4 ">Bistro Boss</h1>
          <p className="w-4/5  mx-auto">
            Bistro Boss is a cozy, elegant city restaurant known for its
            eclectic menu. Enjoy fresh, locally sourced dishes and friendly
            service in a warm ambiance. Perfect for any occasion, Bistro Boss
            offers a delightful dining experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
