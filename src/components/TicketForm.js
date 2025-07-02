import React, { useState } from 'react';
import './TicketForm.css';

function TicketForm({ onAddTicket }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [status, setStatus] = useState('open');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !priority || !status) return;

    const newTicket = {
      title,
      description,
      status,
      priority,
      createdBy: 1
    };

    onAddTicket(newTicket);

    setTitle('');
    setDescription('');
    setPriority('medium');
    setStatus('open');
  };

  return (
    <div className="ticket-form-container">
      <h2>Create New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="open">open</option>
          <option value="in_progress">in_progress</option>
          <option value="resolved">resolved</option>
          <option value="closed">closed</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default TicketForm;
