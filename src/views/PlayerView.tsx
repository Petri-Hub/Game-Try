import { usePlayerContext } from "../contexts/usePlayerContext"

export const PlayerView = () => {
   const player = usePlayerContext()

   const { 
      x, 
      y, 
      maxHealth, 
      health 
   } = player

   return (
      <div style={{
         width: '50px',
         height: '50px',
         background: 'coral',
         position: 'absolute',
         top: y + 'px',
         left: x + 'px',
         borderRadius: '8px'
      }}>
         Player ({health}/{maxHealth})
      </div>
   )
}