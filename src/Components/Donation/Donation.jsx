import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNotFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (donationItems) {
      setDonations(donationItems);
    } else {
      setNotFound("No Data Found");
    }
  }, []);
  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
            {isShow
              ? donations.map((singleDonation) => (
                  <DonatedCard
                    key={singleDonation.id}
                    singleDonation={singleDonation}
                  ></DonatedCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((singleDonation) => (
                    <DonatedCard
                      key={singleDonation.id}
                      singleDonation={singleDonation}
                    ></DonatedCard>
                  ))}
          </div>
          {donations.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="btn btn-primary block mx-auto mt-5"
            >
              See All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
