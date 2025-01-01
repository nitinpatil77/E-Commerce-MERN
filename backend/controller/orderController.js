import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//  create order using COD
const placeOrder = async (req, res) => {
  try {
    const { userId, amount, items, address } = req.body;
    const orderData = {
      userId,
      amount,
      items,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "Order Placed ..!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Place order using stripe method
const placeOrderStripe = async (req, res) => {};

// Place order using stripe method
const placeOrderRazorpay = async (req, res) => {};

// All orders data for Admin
const allOrders = async (req, res) => {};

// User order data for Frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update status from admin pannel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
