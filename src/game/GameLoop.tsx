import React from "react";
import { useFrame } from "../hooks/useFrame";
import { usePlayerContext } from "../contexts/usePlayerContext";
import { CollisionHandler } from "../core/CollisionHandler";

type GameLoopProps = {
   collisionHandler: CollisionHandler,
   children: React.ReactNode
}

export const GameLoop = ({ children, collisionHandler }: GameLoopProps) => {
   const player = usePlayerContext()

   useFrame(() => {
      collisionHandler.handleCollisions()
      player.handleAccelerations()
   })

   return <React.Fragment key={crypto.randomUUID()}>
      {children}
   </React.Fragment>
}