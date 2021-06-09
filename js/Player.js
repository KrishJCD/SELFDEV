class Player
{
  constructor()
  {

  }

  static updatePlayerCount(val)
  {
    var playerCountRef=database.ref('playerCount').set(()=>
    {
      playerCount:val
    });
  }
  
}
