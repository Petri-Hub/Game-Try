import React from "react";
import { useFrame } from "../hooks/useFrame";
import { usePlayerContext } from "../contexts/usePlayerContext";

export const GameLoop = ({ children }: React.PropsWithChildren) => {
   const player = usePlayerContext()

   useFrame(() => {
      player.handleAccelerations()
   })

   return <React.Fragment key={crypto.randomUUID()}>
      {children}
   </React.Fragment>
}