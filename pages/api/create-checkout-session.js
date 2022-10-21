const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transormedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "inr",
      unit_amount: item.price * 100,
      product_data: {
        description: item.productTitle,
        name: item.productTitle,
        images: [item.imgPath],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1LvJBOSHJW70Z0sgZncQBF6S"],
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    line_items: transormedItems,
    mode: "payment",
    metadata: {
      email: email,
      images: JSON.stringify(items.map((item) => item.imgPath)),
    },
    success_url: `${process.env.NEXT_PUBLIC_HOST}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_HOST}/cart`,
  });

  res.status(200).json({ id: session.id });
};
