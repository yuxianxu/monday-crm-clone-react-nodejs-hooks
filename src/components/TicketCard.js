import { Link } from 'react-router-dom';
import AvatarDisplay from '../components/AvatarDisplay';
import StatusDisplay from '../components/StatusDisplay';
import PriorityDisplay from '../components/PriorityDisplay';
import ProgressDisplay from '../components/ProgressDisplay';
import DeleteBlock from '../components/DeleteBlock';

const TicketCard = ( { color, ticket}) => {
  
  return (
    <div className="ticket-card">
      <Link to={`/ticket/${ticket.documentId}`} id="link">
        <div className="ticket-color" style={{ backgroundColor: color }}></div>
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket}/>
        <StatusDisplay status={ticket.status}/>
        <PriorityDisplay priority={ticket.priority}/>
        <ProgressDisplay progress={ticket.progress}/>
      </Link>
      <DeleteBlock documentId={ticket.documentId} />
    </div>
  );
};

export default TicketCard;
