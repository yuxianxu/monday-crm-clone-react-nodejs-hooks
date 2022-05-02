import { Link } from 'react-router-dom';
import AvatarDisplay from '../components/AvatarDisplay';
import StatusDisplay from '../components/StatusDisplay';
import PriorityDisplay from '../components/PriorityDisplay';
import ProgressDisplay from '../components/ProgressDisplay';
import DeleteBlock from '../components/DeleteBlock';

const TicketCard = ( { color, ticket}) => {
  
  return (
    <div className="ticket-card">
      <div className="ticket-color"></div>
      <Link to="/">
        <h3>{ticket.title}</h3>
        <AvatarDisplay />
        <StatusDisplay />
        <PriorityDisplay />
        <ProgressDisplay />
      </Link>
      <DeleteBlock />
    </div>
  );
};

export default TicketCard;
