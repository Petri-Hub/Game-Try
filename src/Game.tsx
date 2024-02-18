import { PlayerContext } from "./contexts/usePlayerContext";
import { PlayerController } from "./controllers/PlayerController";
import { KeyHandler } from "./core/KeyHandler";
import { GameLoop } from "./game/GameLoop";
import { applyDefaultPlayerControls } from "./helpers/applyDefaultPlayerControls.helper";
import { PlayerView } from "./views/PlayerView";

export function Game() {
   const player = new PlayerController()
   const keyHandler = new KeyHandler()

   applyDefaultPlayerControls(player, keyHandler)
 
   return (
      <PlayerContext.Provider value={player}>
         <GameLoop>
            <PlayerView />
         </GameLoop>
      </PlayerContext.Provider>
   )
}