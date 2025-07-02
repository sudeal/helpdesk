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
      const priorities = { 'Yüksek': 3, 'Normal': 2, 'Düşük': 1 };
      return sortOrder === 'desc'
        ? priorities[b.priority] - priorities[a.priority]
        : priorities[a.priority] - priorities[b.priority];
    }
    if (sortKey === 'status') {
      const statuses = { 'Açık': 3, 'Devam Ediyor': 2, 'Kapatıldı': 1 };
      return sortOrder === 'desc'
        ? statuses[b.status] - statuses[a.status]
        : statuses[a.status] - statuses[b.status];
    }
    return 0;
  });

  return (
    <div className="ticket-list-container">
      <h2>Destek Talepleri</h2>
      <div className="ticket-list-filters">
        <label>Durum: </label>
        <select value={localFilter.status} onChange={e => setLocalFilter(f => ({ ...f, status: e.target.value }))}>
          <option value="">Seçiniz...</option>
          <option value="Açık">Açık</option>
          <option value="Devam Ediyor">Devam Ediyor</option>
          <option value="Kapatıldı">Kapatıldı</option>
        </select>
        <label>Öncelik: </label>
        <select value={localFilter.priority} onChange={e => setLocalFilter(f => ({ ...f, priority: e.target.value }))}>
          <option value="">Seçiniz...</option>
          <option value="Düşük">Düşük</option>
          <option value="Normal">Normal</option>
          <option value="Yüksek">Yüksek</option>
        </select>
        <label>Sırala: </label>
        <select value={localFilter.sortKey} onChange={e => setLocalFilter(f => ({ ...f, sortKey: e.target.value }))}>
          <option value="">Seçiniz...</option>
          <option value="createdAt">Oluşturulma Tarihi</option>
          <option value="priority">Öncelik</option>
          <option value="status">Durum</option>
        </select>
        <button onClick={handleApplyFilter}>Filtrele</button>
      </div>
      <ul className="ticket-list-ul">
        {sortedTickets.map(ticket => (
          <li key={ticket.id} onClick={() => onSelectTicket(ticket)} className="ticket-list-card">
            <span className="ticket-list-card-title">{ticket.title}</span>
            <div className="ticket-list-card-meta">
              <span>Durum: {ticket.status}</span>
              <span>Öncelik: {ticket.priority}</span>
              <span>{new Date(ticket.createdAt).toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList; 