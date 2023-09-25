/* eslint-disable react/prop-types */
const DonationsCard = ({singleDonation}) => {
    const { picture, title, category, category_bg_color, card_bg_color, text_button_bg_color  } = singleDonation || {}
  return (
    <div>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            src={picture}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h4 className="text-sm font-medium text-[category_bg_colo]">
            {category}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationsCard;
