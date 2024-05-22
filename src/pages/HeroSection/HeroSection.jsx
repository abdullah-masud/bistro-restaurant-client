import chefimage from "../../assets/home/chef-service.jpg";
const HeroSection = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-center mb-24"
      style={{ backgroundImage: `url(${chefimage})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="text-center w-4/5 text-black p-16 bg-white">
          <h1 className="text-3xl uppercase mb-4">Bistro Boss</h1>
          <p className="w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
