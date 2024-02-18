import { createContext, useContext } from "react";
import { PlayerController } from "../controllers/PlayerController";

const PlayerContext = createContext<PlayerController | null>(null)

const usePlayerContext = () => {
   const playerContext = useContext(PlayerContext)

   if(!playerContext) throw new Error("Contexto de player fora de escopo.")

   return playerContext
}

export {
   PlayerContext,
   usePlayerContext
}
