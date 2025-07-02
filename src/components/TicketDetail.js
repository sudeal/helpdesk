import React from 'react';

function TicketDetail({ ticket, onUpdateTicket, onClose }) {
  if (!ticket) return null;

  const handleStatusChange = (e) => {
    onUpdateTicket({ ...ticket, status: e.target.value });
  };
  const handlePriorityChange = (e) => {
    onUpdateTicket({ ...ticket, priority: e.target.value });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, marginTop: 16 }}>
      <h3>{ticket.title || ticket.Title}</h3>
      <p><strong>Description:</strong> {ticket.description || ticket.Description}</p>
      <p><strong>Created At:</strong> {new Date(ticket.createdAt || ticket.CreatedAt).toLocaleString()}</p>
      <div>
        <label>Status: </label>
        <select value={ticket.status || ticket.Status} onChange={handleStatusChange}>
          <option value="open">open</option>
          <option value="in_progress">in_progress</option>
          <option value="resolved">resolved</option>
          <option value="closed">closed</option>
        </select>
        <label>Priority: </label>
        <select value={ticket.priority || ticket.Priority} onChange={handlePriorityChange}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
      <button onClick={onClose} style={{ marginTop: 8 }}>Close</button>
    </div>
  );
}

export default TicketDetail; 