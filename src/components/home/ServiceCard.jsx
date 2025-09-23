import ServiceCardLinkButton from "./ServiceCardLinkButton";

const ServiceCard = ({ title, text, icon:Icon }) => {
  return (
    <div className="relative rounded-lg w-[350px] h-[230px] flex flex-col items-center justify-between pt-8 p-4 border-third border-2 bg-white shadow-md">
      {/* Icon wrapper */}
      <div className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-third shadow-md">
        <Icon className="w-6 h-6 text-red-600" />
      </div>

      <h3 className="font-semibold text-center">{title}</h3>
      <p className="font-light text-center">{text}</p>
      <ServiceCardLinkButton />
    </div>
  );
};

export default ServiceCard;
