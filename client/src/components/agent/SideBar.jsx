import LogoNeatly from "../../assets/agent/logo.png";
import Booking from "../../assets/agent/icon/booking.png"
import Hotel from "../../assets/agent/icon/hotel.png";
import Logout from "../../assets/agent/icon/logout.png";
import Manage from "../../assets/agent/icon/manage.png";
import Room from "../../assets/agent/icon/room.png";

function SideBar() {
  return (
    <div className="w-60 bg-green800 h-[1024px] flex flex-col gap-10 absolute top-0 left-0">
      <div className="py-10 px-6">
        <div className="flex flex-col items-center gap-4">
          <img src={LogoNeatly} alt="logo" width={120} />
          <p className="body1 text-green400">Admin Panel Control</p>
        </div>
      </div>
      <nav className="h-[540px]">
        <ul className="text-green100">
          <li className="p-6 hover:bg-green600">
            <a href="/agent/customer-booking" className="flex gap-4">
              <img src={Booking} alt="" width={24} />
              Customer Booking
            </a>
          </li>
          <li className="p-6 hover:bg-green600">
            <a href="#" className="flex gap-4">
              <img src={Manage} alt="" width={24} />
              Room Management
            </a>
          </li>
          <li className="p-6 hover:bg-green600">
            <a href="#" className="flex gap-4">
              <img src={Hotel} alt="" width={24} />
              Hotel Information
            </a>
          </li>
          <li className="p-6 hover:bg-green600">
            <a href="#" className="flex gap-4">
              <img src={Room} alt="" width={24} />
              Room & Property
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-6 hover:bg-green600 border border-green800 border-t-green700 text-green100">
        <a href="#" className="flex gap-4">
          <img src={Logout} alt="" width={24} />
          Logout
        </a>
      </div>
    </div>
  );
}

export default SideBar;
