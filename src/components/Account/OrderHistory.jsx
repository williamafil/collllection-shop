import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import StatusCircle from "../UI/StatusCircle";
import { ReactComponent as CreditCardIcon } from "../../images/credit-card.svg";

// TODO:
// get user id
// fetch user's orders from firestore

const OrderHistory = () => {
  const history = useHistory();
  const userId = useSelector((state) => state.user.currentUser.id);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    setIsLoading(true);

    try {
      const postsRef = collection(db, "orders");
      const q = query(postsRef, where("shipping.userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setIsLoading(false);
      console.log(data);
      setOrders(data);
    } catch (error) {
      setIsLoading(false);
      console.error("ERROR FETCHING ORDERS: ", error);
    }

    return () => {};
  }, []);

  const orderList = () => (
    <section>
      <header className="w-full px-2 border-b border-gray-500 text-xs space-x-2 flex items-center">
        <div className="w-3/12 sm:w-2/12">Order Num.</div>
        <div className="w-3/12 sm:w-4/12 hidden sm:block">Items</div>

        <div className="w-3/12 sm:w-2/12">Date</div>
        <div className="w-3/12 sm:w-2/12">Total Price</div>
        <div className="w-2/12 sm:w-2/12 lg:w-1/12">Payment Status</div>
        <div className="w-1/12 text-center">-</div>
      </header>
      {orders.map((order) => (
        <article
          key={order.id}
          className="w-full p-2 border-b border-gray-300 text-xs space-x-2 flex hover:bg-warmGray-200"
        >
          <div className="w-3/12 sm:w-2/12">
            #{order.createdAt?.seconds.toString()}
          </div>

          <div className="w-3/12 sm:w-4/12 hidden sm:block">
            <ul className="w-full">
              {cartItems.map((item) => (
                <li className="">
                  <p className="truncate">
                    {item.quantity} x {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-3/12 sm:w-2/12 ">
            {order.createdAt?.toDate().toLocaleDateString()}
          </div>
          <div className="w-3/12 sm:w-2/12">${order.total.toFixed(2)}</div>
          <div className="w-2/12 sm:w-2/12 lg:w-1/12">
            {order.isPaid ? (
              <>
                <StatusCircle className="bg-green-400" /> Paid
              </>
            ) : (
              <>
                <StatusCircle className="bg-gray-400" /> Unpaid
              </>
            )}
          </div>
          <div className="w-1/12 ">
            <div class="relative">
              {!order.isPaid && (
                <CreditCardIcon
                  onClick={() => history.push(`/payment/${order.id}`)}
                  className="w-5 absolute -top-2 left-1 cursor-pointer"
                />
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );

  return (
    <>
      <h2 className="my-2 text-xl">Order History</h2>
      {!orders.length ? (
        <p className="pt-2.5">You haven't placed any orders yet.</p>
      ) : (
        orderList()
      )}
    </>
  );
};

export default OrderHistory;
