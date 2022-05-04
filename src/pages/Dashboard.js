import TicketCard from '../components/TicketCard';

const Dashboard = () => {
  const tickets = [
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'NFT Safety 101 Video',
      owner: 'Yuxian Xu',
      avatar: 'https://avatars.githubusercontent.com/u/85212477?v=4',
      status: 'done',
      priority: 5,
      progress: 40,
      description: 'Make a video showcasing how to work with NFT',
      timestamp: '2022-02-11T08:36:18+0000',
    },
    {
      category: 'Q1 2022',
      color: 'red',
      title: 'Build and Sell AI Model',
      owner: 'Yuxian Xu',
      avatar: 'https://avatars.githubusercontent.com/u/85212477?v=4',
      status: 'working on it',
      priority: 2,
      progress: 70,
      description: 'AI video is amazing',
      timestamp: '2022-03-11T08:36:18+0000',
    },
    {
      category: 'Q2 2022',
      color: 'purple',
      title: 'Build and Sell a bot',
      owner: 'Yuxian Xu',
      avatar: 'https://avatars.githubusercontent.com/u/85212477?v=4',
      status: 'working on it',
      priority: 3,
      progress: 10,
      description: 'Do you like bot?',
      timestamp: '2022-03-12T08:36:18+0000',
    },
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
                    color={filteredTicket.color}
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
