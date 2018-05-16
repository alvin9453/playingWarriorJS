class Player {
  playTurn(warrior) {
    if( warrior.feel().isEmpty() ){
      if( warrior.health() >= this.health && warrior.health() < 12){ // not taking damage
        warrior.rest();
      }else{
        warrior.walk();
      }
    }else{
      warrior.attack()
    }
    this.health = warrior.health(); // current health
  }
}
