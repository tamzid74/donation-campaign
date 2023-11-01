/* eslint-disable react/prop-types */

import DonationsCard from "./DonationsCard";

const Donations = ({ donations, search }) => {
  return (
    <div className=" max-w-7xl mx-auto mt-24 px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4 py-10">
      {donations
        ?.filter((singleDonation) =>
          singleDonation.category.toLowerCase().includes(search)
        )
        .map((singleDonation) => (
          <DonationsCard
            key={singleDonation.id}
            singleDonation={singleDonation}
          ></DonationsCard>
        ))}
    </div>
  );
};

export default Donations;
