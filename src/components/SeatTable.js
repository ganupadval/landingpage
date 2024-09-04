import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt";

const SeatTable = () => {
  const [seatData, setSeatData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("https://viaje.ai/seatinfo_api/");
        const result = await response.json();
        setSeatData(result.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching seat data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
    
      const table = $('#seatTable').DataTable({
        responsive: true,
      });

      
      return () => {
        if ($.fn.dataTable.isDataTable('#seatTable')) {
          table.destroy(true);
        }
      };
    }
  }, [loading]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="m-auto">
      <table id="seatTable" className="display">
        <thead>
          <tr>
            <th>Seat No</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {seatData.map((seat, index) => (
            <tr key={index}>
              <td>{seat.seat_no}</td>
              <td>{seat.price}</td>
              <td>{seat.status === "B" ? "Booked" : "Available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeatTable;
