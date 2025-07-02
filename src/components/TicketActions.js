import React from 'react';
import './TicketActions.css';

function TicketActions({ onCreate, onList }) {
  return (
    <div className="ticket-actions-grid">
      <div className="ticket-action-card">
        <h3>Destek Talebi Oluştur</h3>
        <p>Yeni bir destek talebi oluşturun ve kaydedin.</p>
        <button onClick={onCreate}>Oluştur</button>
      </div>
      <div className="ticket-action-card">
        <h3>Talepleri Görüntüle</h3>
        <p>Destek taleplerini listeleyin, filtreleyin ve sıralayın.</p>
        <button onClick={onList}>Görüntüle</button>
      </div>
    </div>
  );
}

export default TicketActions; 