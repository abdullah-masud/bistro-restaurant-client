const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12  mx-auto text-center my-8">
      <p className="text-yellow-500 mb-2 italic">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-2 py-4 font-semibold">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
