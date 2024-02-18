import { useState } from "react";
import { FPS } from "../variables/Constants";

export const useFrame = (callback?: CallableFunction) => {
   const [frame, setFrame] = useState<number>(1)

   if(callback) callback(frame)

   setTimeout(() => setFrame(frame + 1), 1000 / FPS)

   return frame
}