import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../components/hooks/useAuth";

function PaymentResult() {
  const navigate = useNavigate();
  const { isAuthenticated, userData } = useAuth();
  const [Loading, setLoading] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    room: {},
  });
  const [simplifiedRequests, setSimplifiedRequests] = useState([]);

  console.log(userData);
  console.log(bookingInfo);
  console.log(simplifiedRequests);

  useEffect(() => {
    if (userData && bookingInfo) {
      getRecentBooking();
    }
  }, [userData]);

  const getRecentBooking = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:4000/booking/recent-booking/${userData.id}`
      );
      // console.log(result.data);

      const { bookingDetail, roomInfo, requests } = result.data;

      setBookingInfo({
        ...bookingDetail,
        room: { ...roomInfo },
      });
      console.log(bookingInfo);

      const newSimplifiedRequests = requests.map((request) => {
        return {
          name: request.request_name,
          price: request.request_price,
          type: request.request_type,
        };
      });

      setSimplifiedRequests(newSimplifiedRequests);

      if (!bookingInfo) {
        return <div>Loading</div>;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // format date part vvv

  const checkIn = bookingInfo.check_in;
  const checkOut = bookingInfo.check_out;

  function dateFormat(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return "Loading...";
    const optionsDayWeek = { weekday: "short" };
    const optionsMonth = { month: "short" };
    const optionsDay = { day: "numeric" };
    const optionsYear = { year: "numeric" };

    const dayWeek = date.toLocaleDateString("en-US", optionsDayWeek);
    const month = date.toLocaleDateString("en-US", optionsMonth);
    const day = date.toLocaleDateString("en-US", optionsDay);
    const year = date.toLocaleDateString("en-US", optionsYear);

    return `${dayWeek}, ${month} ${day} ${year}`;
  }

  const formattedCheckIn = dateFormat(checkIn);
  const formattedCheckOut = dateFormat(checkOut);
  const formattedDate = `${formattedCheckIn} - ${formattedCheckOut}`;

  // format date part ^^^

  // check payment method part vvv

  const paymentMethod = bookingInfo.payment_method;
  function checkPaymentMethod() {
    if (paymentMethod === "Cash") {
      return "Cash";
    } else if (paymentMethod === "Credit card") {
      const creditCardNumber = userData.card.cardNumber;
      const lastThreeDigits = creditCardNumber.slice(-3);
      return `Credit Card - *${lastThreeDigits}`;
    }
  }
  const paymentMethodDisplay = checkPaymentMethod(paymentMethod);
  console.log(paymentMethodDisplay);

  // check payment method part vvv

  // sum total vvv

  function sumTotal(roomPrice, simplifiedRequests) {
    let totalCost = roomPrice;

    simplifiedRequests.forEach((request) => {
      totalCost += request.price;
    });

    return totalCost;
  }

  const roomPrice = bookingInfo.room.roomPrice;
  const totalCost = sumTotal(roomPrice, simplifiedRequests);

  // sum total ^^^

  return (
    <>
      <main className="flex justify-center items-center pt-12 bg-gray300">
        <section className="max-w-[738px]">
          <section className="text-center bg-green800 py-9 px-14">
            <h2 className="headline3 text-utilWhite">Thank you for booking</h2>
            <p className="body2 text-green400 px-1 mt-4">
              We are looking forward to hosting you at our place.<br></br> We
              will send you more information about check-in and staying at our
              Neatly closer to your date of reservation
            </p>
          </section>

          <section className="flex flex-col w-full bg-green700 px-7 pt-4 pb-7">
            <div className="flex justify-between bg-green600 my-2 p-6 rounded text-body1 text-utilWhite">
              <article>
                <p className="font-fontWeight6">{formattedDate}</p>
                <p className="font-fontWeight4">
                  {bookingInfo?.room?.guestNumber}
                </p>
              </article>

              <div className="flex gap-10">
                <article>
                  <p className="font-fontWeight6">Check-in</p>
                  <p className="font-fontWeight4">After 2:00 PM</p>
                </article>
                <article>
                  <p className="font-fontWeight6">Check-out</p>
                  <p className="font-fontWeight">Before 12:00 PM</p>
                </article>
              </div>
            </div>
            <div className="flex justify-end my-6 gap-x-5">
              <p className="text-green300">Payment success via</p>
              <p className="text-green300 font-fontWeight6">
                {paymentMethodDisplay}
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-5">
                <p className="body1 text-green300">
                  {bookingInfo.room.roomType}
                </p>
                <p className="text-body1 text-utilWhite">
                  {bookingInfo.room.roomPrice}
                </p>
              </div>
              {simplifiedRequests.length > 0 &&
                simplifiedRequests.map((request, index) => (
                  <div key={index} className="flex justify-between mb-5">
                    <p className="body1 text-green300">{request.name}</p>
                    <p className="text-body1 text-utilWhite">{request.price}</p>
                  </div>
                ))}
              <hr></hr>
              <div className="flex justify-between mt-5">
                <p className="body1 text-green300">Total</p>
                <p className="headline text-utilWhite">{totalCost}</p>
              </div>
            </div>
          </section>

          <section className="flex justify-center mt-10 gap-x-10">
            <button className="text-body1 font-fontWeight6 text-orange500 pb-4 cursor-pointer">
              Check Booking Detail
            </button>
            <button
              className="btn w-1/4  bg-orange600 hover:bg-orange500 active:bg-orange700 text-body1 text-utilWhite font-fontWeight6 mb-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </section>
        </section>
      </main>
    </>
  );
}

export default PaymentResult;