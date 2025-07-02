import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TicketActions from './components/TicketActions';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import TicketDetail from './components/TicketDetail';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [filter, setFilter] = useState({ status: '', priority: '' });
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Türkçe öncelikleri İngilizce'ye çevir
  const convertPriority = (trPriority) => {
    const map = {
      'Düşük': 'low',
      'Normal': 'medium',
      'Yüksek': 'high'
    };
    return map[trPriority] || 'medium';
  };

  // Ticket'ları API'den çek
  useEffect(() => {
    if (showList) {
      fetchTickets();
    }
  }, [showList]);

  const fetchTickets = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/tickets`);
      setTickets(response.data);
    } catch (err) {
      setError('Destek talepleri yüklenemedi.');
    }
    setLoading(false);
  };

  // Yeni ticket ekle
  const handleAddTicket = async (ticket) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const ticketWithUser = {
        ...ticket,
        createdBy: ticket.createdBy || 1
      };
      const response = await axios.post(`${API_URL}/tickets`, ticketWithUser);
      setTickets([response.data, ...tickets]);
      setShowForm(false);
      setShowList(true);
      setSuccess('Destek talebi başarıyla oluşturuldu.');
    } catch (err) {
      setError('Destek talebi eklenemedi.');
    }
    setLoading(false);
  };

  // Ticket güncelle
  const handleUpdateTicket = async (updatedTicket) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`${API_URL}/tickets/${updatedTicket.id}`, updatedTicket);
      setTickets(tickets.map(t => t.id === updatedTicket.id ? response.data : t));
      setSelectedTicket(response.data);
    } catch (err) {
      setError('Destek talebi güncellenemedi.');
    }
    setLoading(false);
  };

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseDetail = () => {
    setSelectedTicket(null);
  };

  // Buton fonksiyonları
  const handleShowForm = () => {
    setShowForm(true);
    setShowList(false);
    setSuccess(null);
    setError(null);
  };
  const handleShowList = () => {
    setShowList(true);
    setShowForm(false);
    setSuccess(null);
    setError(null);
  };

  return (
    <div className="App">
      <Header />
      <TicketActions
        onCreate={handleShowForm}
        onList={handleShowList}
      />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {loading && <div>Yükleniyor...</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green', fontWeight: 'bold', marginBottom: 16 }}>{success}</div>}
        {showForm && <TicketForm onAddTicket={handleAddTicket} />}
        {showList && (
          <TicketList
            tickets={tickets}
            onSelectTicket={handleSelectTicket}
            filter={filter}
            setFilter={setFilter}
          />
        )}
        <TicketDetail
          ticket={selectedTicket}
          onUpdateTicket={handleUpdateTicket}
          onClose={handleCloseDetail}
        />
      </div>
    </div>
  );
}

export default App;
