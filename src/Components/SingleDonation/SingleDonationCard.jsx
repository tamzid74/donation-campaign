/* eslint-disable react/prop-types */
const SingleDonationCard = ({ singleDonation }) => {
  const { picture, title, text_button_bg_color, description, donation } =
    singleDonation || {};
  return (
    
      <div className="w-full space-y-6 p-5">
          <img className="relative w-full rounded-lg"
            src={picture}
            alt="Album"
          />
          {/* <div className="absolute w-full bottom-0 bg-black opacity-50 p-14 ">
          </div> */}
          <button style={{background:text_button_bg_color}} className=" absolute bottom-9 ml-9 rounded-lg text-sm lg:text-xl font-semibold text-white px-4 py-2">Donate ${donation}</button>
          <h2 className="text-4xl font-bold">{title}</h2>
          <p>{description}</p>
          
      </div>
    
  );
};

export default SingleDonationCard;
