import { useState } from 'react';
import axios from 'axios';
 
const useTickets = () => {
    const [tickets, setTickets] = useState({});
 
    const getTickets = async () => {
        try {
            const response = await axios.get('/api/tickets');
            setTickets(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
 
    return { tickets, getTickets };
};

export default useTickets;