import { PlayerContext } from "./contexts/usePlayerContext";
import { PlayerController } from "./controllers/PlayerController";
import { CollisionHandler } from "./core/CollisionHandler";
import { KeyHandler } from "./core/KeyHandler";
import { GameLoop } from "./game/GameLoop";
import { applyDefaultPlayerControls } from "./helpers/applyDefaultPlayerControls.helper";
import { IEntity } from "./interfaces/IEntity";
import { PlayerView } from "./views/PlayerView";

export function Game() {

   const entity: IEntity = {
      x: 250,
      y: 250,
      height: 250,
      width: 250
   }

   const player = new PlayerController()
   const keyHandler = new KeyHandler()
   const collisionHandler = new CollisionHandler([player, entity])


   applyDefaultPlayerControls(player, keyHandler)
 
   return (
      <PlayerContext.Provider value={player}>
         <GameLoop collisionHandler={collisionHandler}>
            <PlayerView />
            
            <div style={{
               background: 'red',
               position: 'absolute',
               top: entity.y + 'px',
               left: entity.x + 'px',
               width: entity.width + 'px',
               height: entity.height + 'px'
            }}></div>
         </GameLoop>
      </PlayerContext.Provider>
   )
}