import { getSession } from "next-auth/react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrdersSection from "../components/OrdersSection";
import db from "../firebase";
import moment from "moment";

const Orders = ({ orders, session }) => {
  return (
    <>
      <Header />
      <OrdersSection orders={orders} />
      <Footer />
    </>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

  const session = await getSession(context);

  if (!session) return { props: {} };

  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return { props: { orders, session } };
}
