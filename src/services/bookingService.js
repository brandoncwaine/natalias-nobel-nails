import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const BOOKINGS_COLLECTION = "bookings";

// Create a new booking
export const createBooking = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(db, BOOKINGS_COLLECTION), {
      ...bookingData,
      createdAt: Timestamp.now(),
      status: "pending", // pending, confirmed, cancelled, completed
    });
    return { id: docRef.id, ...bookingData };
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

// Get all bookings
export const getAllBookings = async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, BOOKINGS_COLLECTION), orderBy("date", "asc")),
    );
    const bookings = [];
    querySnapshot.forEach((doc) => {
      bookings.push({ id: doc.id, ...doc.data() });
    });
    return bookings;
  } catch (error) {
    console.error("Error getting bookings:", error);
    throw error;
  }
};

// Get bookings for a specific date
export const getBookingsByDate = async (date) => {
  try {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const q = query(
      collection(db, BOOKINGS_COLLECTION),
      where("date", ">=", startOfDay.toISOString()),
      where("date", "<=", endOfDay.toISOString()),
    );

    const querySnapshot = await getDocs(q);
    const bookings = [];
    querySnapshot.forEach((doc) => {
      bookings.push({ id: doc.id, ...doc.data() });
    });
    return bookings;
  } catch (error) {
    console.error("Error getting bookings by date:", error);
    throw error;
  }
};

// Update booking status
export const updateBookingStatus = async (bookingId, status) => {
  try {
    const bookingRef = doc(db, BOOKINGS_COLLECTION, bookingId);
    await updateDoc(bookingRef, { status });
  } catch (error) {
    console.error("Error updating booking:", error);
    throw error;
  }
};

// Delete booking
export const deleteBooking = async (bookingId) => {
  try {
    await deleteDoc(doc(db, BOOKINGS_COLLECTION, bookingId));
  } catch (error) {
    console.error("Error deleting booking:", error);
    throw error;
  }
};
