import react from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const UnsubscribeConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleResubscribe = () => {
    navigate("/#footer");
  };
  
  return (
    <div className="bg-primary/40 relative pt-40 p-20 m-5 gap-4 h-auto flex justify-center flex-col font-RedHat font-bold text-center text-xl items-center">
      <h1>You have successfully unsubscribed from the newsletter!</h1>
      <p>
        Thanks for your participation. <br/> From now on you will no longer receive
        our news, <br/> it is a pleasure that you have been part of our Be Comfree
        community!
      </p>
      <h3>If you want to subscribe again</h3>
      <button
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/70 focus:border-gray-500"
        onClick={handleResubscribe}
      >
        Resubscribe
      </button>
    </div>
  );
};

export default UnsubscribeConfirmation;
