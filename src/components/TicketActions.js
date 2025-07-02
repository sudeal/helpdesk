import React from 'react';
import './TicketActions.css';

function TicketActions({ onCreate, onList }) {
  return (
    <div className="ticket-actions-grid">
      <div className="ticket-action-card">
        <h3>Create Ticket</h3>
        <p>Create and save a new support ticket.</p>
        <button onClick={onCreate}>Create</button>
      </div>
      <div className="ticket-action-card">
        <h3>View Tickets</h3>
        <p>List, filter, and sort support tickets.</p>
        <button onClick={onList}>View</button>
      </div>
    </div>
  );
}

export default TicketActions; 