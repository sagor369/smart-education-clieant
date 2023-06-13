import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import{useEffect, useState} from 'react'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const ChackOut = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState()
  const [axiosSecure] = useAxiosSecure()

  useEffect(()=>{

    axiosSecure.post("/payment-intent", {
      price
    })
    .then(data => {
      console.log(data)
    })

  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        setError(error.message)
        console.log(error.message)
    }
    else{
        setError('')
        console.log([paymentMethod], 'payment')
    }


  };

  return (
    <>
    <form  onSubmit={handleSubmit}>
      <div className="bg-base-200 p-4 rounded-xl mx-4" >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      </div>
      <div className="text-center">
        <button
          className="btn btn-sm btn-success "
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </div>
    </form>
    {
        error && <p className="text-red-800 ml-10"> {error}</p>
    }
    </>
  );
};

export default ChackOut;
