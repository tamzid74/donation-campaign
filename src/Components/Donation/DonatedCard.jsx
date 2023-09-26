/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonatedCard = ({ singleDonation }) => {
  const {
    id,
    picture,
    title,
    category,
    donation,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = singleDonation;
  return (
    
        <div style={{background:card_bg_color}} className="flex min-h-full">
      <div>
        <img className="w-full h-full" src={picture} alt="" />
      </div>
      <div>
        <div className="p-6 min-h-full">
          <span
            style={{ background: card_bg_color, color: text_button_bg_color }}
            className=" px-3 py-2 rounded-lg text-xs font-medium"
          >
            {category}
          </span>
          <p
            style={{ color: category_bg_color }}
            className="mt-3 block font-sans text-sm font-semibold leading-relaxed antialiased"
          >
            {title}
          </p>
          <p style={{ color: category_bg_color }} className="text-base font-semibold mt-3">${donation}</p>
          <Link to={`/donations/${id}`}>
                <button style={{background:category_bg_color}} className="btn text-white mt-3">View Details</button>
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default DonatedCard;
