import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationsCard = ({singleDonation}) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color  } = singleDonation || {}
  return (
    <Link to={`/donations/${id}`}>
      <div style={{background:card_bg_color}} className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img className="w-full"
            src={picture}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <span style={{background:card_bg_color, color:text_button_bg_color}} className=" px-3 py-2 rounded-lg text-sm font-medium">
            {category}
          </span>
          <p style={{color:category_bg_color}} className="mt-3  block font-sans text-xl font-semibold leading-relaxed antialiased">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DonationsCard;
