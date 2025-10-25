const TICKETS_KEY = "ticketapp_tickets";

export const storage = {
  getTickets: () => {
    const tickets = localStorage.getItem(TICKETS_KEY);
    return tickets ? JSON.parse(tickets) : [];
  },

  saveTickets: (tickets) => {
    localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
  },

  addTicket: (ticket) => {
    const tickets = storage.getTickets();
    const newTicket = {
      id: Date.now().toString(),
      ...ticket,
      createdAt: new Date().toISOString(),
    };
    tickets.push(newTicket);
    storage.saveTickets(tickets);
    return newTicket;
  },

  updateTicket: (id, updates) => {
    const tickets = storage.getTickets();
    const index = tickets.findIndex((t) => t.id === id);
    if (index !== -1) {
      tickets[index] = { ...tickets[index], ...updates };
      storage.saveTickets(tickets);
      return tickets[index];
    }
    return null;
  },

  deleteTicket: (id) => {
    const tickets = storage.getTickets();
    const filtered = tickets.filter((t) => t.id !== id);
    storage.saveTickets(filtered);
    return true;
  },
};
