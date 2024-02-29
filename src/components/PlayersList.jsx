import players from "./players.json"
import Card from "./Players"

const PlayersList = () => {
  return (
    <div className="heading">
      <h1>FIFA player cards</h1>
      <div className='main'>
    {players.map(item=>(
  <Card className='card' style={{ width: '18rem',  borderRadius: "2rem" }} key={item.id} item={item}/>
    ))}
    </div>
  </div>
  );
}

export default PlayersList