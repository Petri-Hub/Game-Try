import { usePlayerContext } from "../contexts/usePlayerContext"

export const PlayerView = () => {
   const player = usePlayerContext()   

   return (
      <div style={{
         width: '50px',
         height: '50px',
         background: 'coral',
         position: 'absolute',
         top: player.y + 'px',
         left: player.x + 'px'
      }}>
         Player
      </div>
   )
}