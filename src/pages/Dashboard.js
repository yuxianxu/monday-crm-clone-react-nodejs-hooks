import { useState, useEffect, useContext } from 'react';

import TicketCard from '../components/TicketCard';
import axios from 'axios';

const Dashboard = () => {
  const [tickets, setTickets] = useState(null);

  useEffect(async () => {
    const response = await axios.get('http://localhost:8000/tickets')

    const dataObject = response.data.data

    const arrayOfKeys = Object.keys(dataObject)
    const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
    const formattedArray = []
    arrayOfKeys.forEach((key, index) => {
      const formmatedData = { ...arrayOfData[index] }
      formmatedData['documentId'] = key
      formattedArray.push(formmatedData)
    })
    console.log(formattedArray)

    setTickets(formattedArray)
  }, [])
 

  const colors = [
    'rgb(255, 179, 186)',
    'rgb(255, 223, 186)',
    'rgb(255, 255, 186)',
    'rgb(186, 255, 201)',
    'rgb(186, 255, 255)',
  ];


  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  // console.log(categoryIndex);

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    key={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
