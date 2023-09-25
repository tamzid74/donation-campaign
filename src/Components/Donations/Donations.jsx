/* eslint-disable react/prop-types */

import DonationsCard from "./DonationsCard";

const Donations = ({ donations }) => {
  return (
    <div className=" max-w-7xl mx-auto mt-24 px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {donations?.map((singleDonation) => (
        <DonationsCard
          key={singleDonation.id}
          singleDonation={singleDonation}
        ></DonationsCard>
      ))}
    </div>
  );
};

export default Donations;
