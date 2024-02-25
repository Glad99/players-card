import players from "./players.json"
import Card from "./Players"

const PlayersList = () => {
  return (
    <div className='main'>
    {players.map(item=>(
  <Card className='card' style={{ width: '18rem', backgroundColor: "silver", borderRadius: "2rem" }} key={item.id} item={item}/>
    ))}
  </div>
  );
}

export default PlayersList