
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="text-center my-8 w-3/12 mx-auto">
        <p className="mb-2 text-yellow-500">--- {subheading} ---</p>
        <h3 className="text-3xl uppercase border  border-y-4 border-x-0 py-2 ">{heading}</h3>
    </div>
    );
};

export default SectionTitle;