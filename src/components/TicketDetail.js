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
      <h3>{ticket.title}</h3>
      <p><strong>Açıklama:</strong> {ticket.description}</p>
      <p><strong>Oluşturulma:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
      <div>
        <label>Durum: </label>
        <select value={ticket.status} onChange={handleStatusChange}>
          <option value="Açık">Açık</option>
          <option value="Kapalı">Kapalı</option>
        </select>
        <label>Öncelik: </label>
        <select value={ticket.priority} onChange={handlePriorityChange}>
          <option value="Düşük">Düşük</option>
          <option value="Normal">Normal</option>
          <option value="Yüksek">Yüksek</option>
        </select>
      </div>
      <button onClick={onClose} style={{ marginTop: 8 }}>Kapat</button>
    </div>
  );
}

export default TicketDetail; 