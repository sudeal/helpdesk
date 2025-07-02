import React, { useState } from 'react';
import './TicketList.css';

function TicketList({ tickets, onSelectTicket, filter, setFilter }) {
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [localFilter, setLocalFilter] = useState({ status: '', priority: '', sortKey: '' });

  // Filtrele butonuna basınca asıl filtre ve sıralama state'lerini güncelle
  const handleApplyFilter = () => {
    setFilter({ status: localFilter.status, priority: localFilter.priority });
    setSortKey(localFilter.sortKey);
    setSortOrder('desc'); // Varsayılan olarak azalan sırada tut
  };

  const filteredTickets = tickets.filter(ticket => {
    if (filter.status && ticket.status !== filter.status) return false;
    if (filter.priority && ticket.priority !== filter.priority) return false;
    return true;
  });

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    if (sortKey === 'createdAt') {
      return sortOrder === 'desc'
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt);
    }
    if (sortKey === 'priority') {
      const priorities = { 'high': 3, 'medium': 2, 'low': 1 };
      return sortOrder === 'desc'
        ? priorities[b.priority] - priorities[a.priority]
        : priorities[a.priority] - priorities[b.priority];
    }
    if (sortKey === 'status') {
      const statuses = { 'open': 4, 'in_progress': 3, 'resolved': 2, 'closed': 1 };
      return sortOrder === 'desc'
        ? statuses[b.status] - statuses[a.status]
        : statuses[a.status] - statuses[b.status];
    }
    return 0;
  });

  return (
    <div className="ticket-list-container">
      <h2>Support Tickets</h2>
      <div className="ticket-list-filters">
        <label>Status: </label>
        <select value={localFilter.status} onChange={e => setLocalFilter(f => ({ ...f, status: e.target.value }))}>
          <option value="">Select...</option>
          <option value="open">open</option>
          <option value="in_progress">in_progress</option>
          <option value="resolved">resolved</option>
          <option value="closed">closed</option>
        </select>
        <label>Priority: </label>
        <select value={localFilter.priority} onChange={e => setLocalFilter(f => ({ ...f, priority: e.target.value }))}>
          <option value="">Select...</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <label>Sort: </label>
        <select value={localFilter.sortKey} onChange={e => setLocalFilter(f => ({ ...f, sortKey: e.target.value }))}>
          <option value="">Select...</option>
          <option value="createdAt">Created At</option>
          <option value="priority">Priority</option>
          <option value="status">Status</option>
        </select>
        <button onClick={handleApplyFilter}>Filter</button>
      </div>
      <ul className="ticket-list-ul">
        {sortedTickets.map(ticket => (
          <li key={ticket.id || ticket.TicketID} onClick={() => onSelectTicket(ticket)} className="ticket-list-card">
            <span className="ticket-list-card-title">{ticket.title || ticket.Title}</span>
            <div className="ticket-list-card-meta">
              <span>Status: {ticket.status || ticket.Status}</span>
              <span>Priority: {ticket.priority || ticket.Priority}</span>
              <span>{new Date(ticket.createdAt || ticket.CreatedAt).toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList; 