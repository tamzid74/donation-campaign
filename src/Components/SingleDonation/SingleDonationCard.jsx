import swal from "sweetalert";

/* eslint-disable react/prop-types */
const SingleDonationCard = ({ singleDonation }) => {
  const { id, picture, title, text_button_bg_color, description, donation } =
    singleDonation || {};

  const handleToAdd = () => {
    const addedDonationsArray = [];

    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (!donationItems) {
      addedDonationsArray.push(singleDonation);
      localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
      swal("Good job!", "Donation Done", "success");
    } else {
      const isExits = donationItems.find(
        (singleDonation) => singleDonation.id === id
      );

      if (!isExits) {
        addedDonationsArray.push(...donationItems, singleDonation);
        localStorage.setItem("donations", JSON.stringify(addedDonationsArray));
        swal("Good job!", "Donation Done", "success");
      } else {
        swal("Error!", "Already donated!", "error");
      }
    }
  };

  return (
    <div className=" space-y-6 p-5">
      <div className="relative">
        <img className="w-full rounded-lg object-cover" src={picture} alt="Album" />
        <div className="absolute w-full bottom-0 rounded-lg bg-[#0B0B0B80] p-2 md:p-4 lg:p-8">
        <button
          onClick={handleToAdd}
          style={{ background: text_button_bg_color }}
          className="rounded-lg text-xs lg:text-xl font-semibold text-white px-2 md:px-4 py-2"
        >
          Donate ${donation}
        </button>
        </div>
      </div>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p>{description}</p>
    </div>
  );
};

export default SingleDonationCard;
