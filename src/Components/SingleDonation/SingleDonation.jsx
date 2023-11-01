import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonationCard from "./SingleDonationCard";

const SingleDonation = () => {
  const [singleDonation, setSingleDonation] = useState();

  const { id } = useParams();
  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations?.find(
      (singleDonation) => singleDonation.id === id
    );

    setSingleDonation(findDonation);
  }, [id, donations]);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <SingleDonationCard singleDonation={singleDonation}></SingleDonationCard>
    </div>
  );
};

export default SingleDonation;
