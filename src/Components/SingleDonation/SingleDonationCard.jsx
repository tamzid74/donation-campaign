import swal from "sweetalert";

/* eslint-disable react/prop-types */
const SingleDonationCard = ({ singleDonation }) => {
  const { id, picture, title, text_button_bg_color, description, donation } =
    singleDonation || {};


    const handleToAdd =() =>{
        const addedDonationsArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'));

        if(!donationItems){
            addedDonationsArray.push(singleDonation);
            localStorage.setItem("donations",JSON.stringify(addedDonationsArray));
            swal("Good job!", "Donation Done", "success");
        }
        else{
            const isExits = donationItems.find(singleDonation=> singleDonation.id === id);

            if(!isExits){

                addedDonationsArray.push(...donationItems,singleDonation);
                localStorage.setItem('donations',JSON.stringify(addedDonationsArray));
                swal("Good job!", "Donation Done", "success");
            }else{
                swal("Error!", "Already donated!", "error");
            }
        }
    }







  return (
    
      <div className="w-full space-y-6 p-5">
          <img className="relative w-full rounded-lg"
            src={picture}
            alt="Album"
          />
          <div className="absolute w-[1240px] h-[100] bottom-[15px] rounded-lg bg-black opacity-50 p-14 ">
          </div>
          <button onClick={handleToAdd} style={{background:text_button_bg_color}} className=" absolute bottom-[45px] ml-9 rounded-lg text-sm lg:text-xl font-semibold text-white px-4 py-2">Donate ${donation}</button>
          <h2 className="text-4xl font-bold">{title}</h2>
          <p>{description}</p>
          
      </div>
    
  );
};

export default SingleDonationCard;
