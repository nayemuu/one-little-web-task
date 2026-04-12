const rightLogo = (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={32} height={32} rx={16} fill="#FAC5D2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2476 20.5758 13.128 20.4391L10.165 17.0545C9.92253 16.7775 9.9505 16.3563 10.2275 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5623 11.9403 21.8162 12.207Z"
      fill="#ED3C6A"
    />
  </svg>
);

const crossLogo = (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={32} height={32} rx={16} fill="#F7F8F9" />
    <path
      d="M20.2421 20.2426C20.5025 19.9822 20.5025 19.5601 20.2421 19.2997L16.9428 16.0004L20.2431 12.7001C20.5034 12.4397 20.5034 12.0176 20.2431 11.7573C19.9827 11.4969 19.5606 11.4969 19.3002 11.7573L16 15.0576L12.6997 11.7573C12.4393 11.4969 12.0172 11.4969 11.7569 11.7573C11.4965 12.0176 11.4965 12.4397 11.7569 12.7001L15.0571 16.0004L11.7578 19.2997C11.4974 19.5601 11.4974 19.9822 11.7578 20.2426C12.0181 20.5029 12.4402 20.5029 12.7006 20.2426L16 16.9432L19.2993 20.2426C19.5597 20.5029 19.9818 20.5029 20.2421 20.2426Z"
      fill="#191D23"
    />
  </svg>
);

const PricingCard = ({ card }) => {
  return (
    <div
      className={`w-full rounded-2xl border border-pink-200 p-6 shadow-sm ${
        card.title === "Professional" ? "bg-primary" : "bg-white"
      }`}
    >
      {/* Title */}
      <h2 className="text-[22px] font-bold text-[#191D23]">{card.title}</h2>

      {/* Description */}
      <p className="text-[#64748B] text-[16px] leading-[18px] mt-[11px]">
        {card.description}
      </p>

      {/* Price */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-[56px] leading-[58px] font-semibold">
          ${card.price}
        </span>
        <span className="text-[#4B5768] text-[16px] leading-[18px]">
          / {card.serviceDuration}
        </span>
      </div>

      {/* Button */}
      <button className="w-full border-[1.5px] border-primary rounded-[4px] py-[11px] my-5 text-[16px] leading-[18px] font-semibold text-primary bg-white">
        Get Started Now
      </button>

      {/* Services */}
      <div className="mt-6 space-y-4">
        {card.services.map((service, i) => (
          <div key={i} className="flex items-center gap-3">
            {/* Icon */}

            {service.availability ? rightLogo : crossLogo}

            {/* Text */}
            <p
              className={`text-[16px] leading-[18px] ${
                service.availability ? "text-[#191D23]" : "text-[#A0ABBB]"
              }`}
            >
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
