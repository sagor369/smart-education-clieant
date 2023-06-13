import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ChackOut from "./ChackOut";
import Title from "../../Shared/PageTitle/Title";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
  const [axiosSecure] = useAxiosSecure();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure.get("/my-class");
      const classes = res?.data;

      const paymentPrice = classes.find((data) => data._id === id);
      return paymentPrice.price;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Smart Education | Dashboard</title>
      </Helmet>
      <div className="flex justify-center mt-20 mb-10 bg-opacity-60 bg-lime-700">
        <Title title={"payment hire "}></Title>
      </div>

      <Elements stripe={stripePromise}>
        <ChackOut price={data}></ChackOut>
      </Elements>
    </div>
  );
};

export default Payment;
