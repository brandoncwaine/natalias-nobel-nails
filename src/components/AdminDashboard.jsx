import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import {
  getAllBookings,
  updateBookingStatus,
  deleteBooking,
} from "../services/bookingService";
import { format } from "date-fns";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, pending, confirmed, cancelled

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    setLoading(true);
    try {
      const allBookings = await getAllBookings();
      setBookings(allBookings);
    } catch (error) {
      console.error("Error loading bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      await updateBookingStatus(bookingId, newStatus);
      setBookings(
        bookings.map((booking) =>
          booking.id === bookingId
            ? { ...booking, status: newStatus }
            : booking,
        ),
      );
    } catch (error) {
      console.error("Error updating booking:", error);
      alert("Failed to update booking status");
    }
  };

  const handleDelete = async (bookingId) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) {
      return;
    }
    try {
      await deleteBooking(bookingId);
      setBookings(bookings.filter((booking) => booking.id !== bookingId));
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("Failed to delete booking");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "all") return true;
    return booking.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "#28a745";
      case "pending":
        return "#ffc107";
      case "cancelled":
        return "#dc3545";
      case "completed":
        return "#6c757d";
      default:
        return "#6c757d";
    }
  };

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Bookings</h3>
          <p className="stat-number">{stats.total}</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p className="stat-number pending">{stats.pending}</p>
        </div>
        <div className="stat-card">
          <h3>Confirmed</h3>
          <p className="stat-number confirmed">{stats.confirmed}</p>
        </div>
        <div className="stat-card">
          <h3>Cancelled</h3>
          <p className="stat-number cancelled">{stats.cancelled}</p>
        </div>
      </div>

      <div className="filter-container">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          className={filter === "confirmed" ? "active" : ""}
          onClick={() => setFilter("confirmed")}
        >
          Confirmed
        </button>
        <button
          className={filter === "cancelled" ? "active" : ""}
          onClick={() => setFilter("cancelled")}
        >
          Cancelled
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading bookings...</div>
      ) : (
        <div className="bookings-table-container">
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan="6" className="no-bookings">
                    No bookings found
                  </td>
                </tr>
              ) : (
                filteredBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.customerName}</td>
                    <td>{booking.service}</td>
                    <td>
                      <span
                        className="status-badge"
                        style={{
                          backgroundColor: getStatusColor(booking.status),
                        }}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        {booking.status === "pending" && (
                          <button
                            onClick={() =>
                              handleStatusChange(booking.id, "confirmed")
                            }
                            className="btn-confirm"
                          >
                            Confirm
                          </button>
                        )}
                        {booking.status !== "cancelled" && (
                          <button
                            onClick={() =>
                              handleStatusChange(booking.id, "cancelled")
                            }
                            className="btn-cancel"
                          >
                            Cancel
                          </button>
                        )}
                        {booking.status === "confirmed" && (
                          <button
                            onClick={() =>
                              handleStatusChange(booking.id, "completed")
                            }
                            className="btn-complete"
                          >
                            Complete
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(booking.id)}
                          className="btn-delete"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
