import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { createBooking, getBookingsByDate } from "../services/bookingService";
import "./BookingSystem.css";

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

const SERVICES = [
  { id: "manicure", name: "Classic Manicure", duration: 30 },
  { id: "pedicure", name: "Classic Pedicure", duration: 45 },
  { id: "gel-manicure", name: "Gel Manicure", duration: 60 },
  { id: "gel-pedicure", name: "Gel Pedicure", duration: 60 },
  { id: "spa-manicure", name: "Spa Manicure", duration: 45 },
  { id: "spa-pedicure", name: "Spa Pedicure", duration: 75 },
  { id: "acrylic-full", name: "Full Set Acrylic", duration: 90 },
  { id: "acrylic-fill", name: "Acrylic Fill", duration: 60 },
  { id: "nail-art", name: "Nail Art (per nail)", duration: 15 },
];

const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    loadBookedSlots();
  }, [selectedDate]);

  const loadBookedSlots = async () => {
    try {
      const bookings = await getBookingsByDate(selectedDate);
      const slots = bookings
        .filter((b) => b.status !== "cancelled")
        .map((b) => b.time);
      setBookedSlots(slots);
    } catch (error) {
      console.error("Error loading booked slots:", error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTime || !selectedService || !customerInfo.name) {
      setMessage({ type: "error", text: "Please fill in all fields" });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const service = SERVICES.find((s) => s.id === selectedService);
      const bookingData = {
        date: format(selectedDate, "yyyy-MM-dd"),
        time: selectedTime,
        service: service.name,
        serviceId: service.id,
        duration: service.duration,
        customerName: customerInfo.name,
      };

      await createBooking(bookingData);

      setMessage({
        type: "success",
        text: "Booking confirmed! We look forward to seeing you.",
      });

      // Reset form
      setSelectedTime("");
      setSelectedService("");
      setCustomerInfo({ name: "" });
      loadBookedSlots();
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to create booking. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isTimeSlotAvailable = (time) => {
    return !bookedSlots.includes(time);
  };

  const isPastDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(selectedDate);
    selected.setHours(0, 0, 0, 0);
    return selected < today;
  };

  return (
    <div className="booking-system">
      <h2>Book Your Appointment</h2>

      <div className="booking-container">
        <div className="calendar-section">
          <h3>Select Date</h3>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={new Date()}
            className="booking-calendar"
          />
          <p className="selected-date">
            Selected: {format(selectedDate, "MMMM dd, yyyy")}
          </p>
        </div>

        <div className="booking-form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Select Service</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="">Choose a service...</option>
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} ({service.duration} min)
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Select Time</label>
              <div className="time-slots">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`time-slot ${selectedTime === time ? "selected" : ""} ${!isTimeSlotAvailable(time) || isPastDate() ? "disabled" : ""}`}
                    onClick={() => setSelectedTime(time)}
                    disabled={!isTimeSlotAvailable(time) || isPastDate()}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={customerInfo.name}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, name: e.target.value })
                }
                required
              />
            </div>

            {message.text && (
              <div className={`message ${message.type}`}>{message.text}</div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={loading || isPastDate()}
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;
