import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const ChackOut = ({ data, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const [axiosSecure] = useAxiosSecure();
  const [secretUser, setSecretUser] = useState("");
  const [prossesing, setProssesing] = useState(false);
  const [paymentId , setPaymentId] = useState('')

  useEffect(() => {
    if (data?.price > 0) {
      axiosSecure.post("/payment-intent", { price:data?.price }).then((res) => {
        setSecretUser(res.data.clientSecret);
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error,  } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log(error.message);
    } else {
      setError("");
    }

    const { paymentIntent, error: findError } = await stripe.confirmCardPayment(
      secretUser,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );
    setPaymentId(paymentIntent?.id)
    setProssesing(false);
    if (findError) {
      console.log(findError.message);
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: data?.price,
        className : data?.className,
        id: data?._id,
        date: new Date(),
        status: "service pending",
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          axiosSecure.patch(`/enroll-class/${data?._id}`)
          .then(res =>{
            console.log(res.data)
          })
        }

      });
      console.log(data._id, 'data id')
      axiosSecure.patch(`/update-class/${data?.className}`)
      .then(res=>{
        if(res.data.modifiedCount >0){
          Swal.fire({
            title:'Your payment is successfull ',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      })
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-base-200 p-4 rounded-xl mx-4">
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
            disabled={!stripe || !secretUser || prossesing}
          >
            Pay
          </button>
        </div>
      </form>
      {error && <p className="text-red-800 ml-10"> {error}</p>}
    </>
  );
};

export default ChackOut;
