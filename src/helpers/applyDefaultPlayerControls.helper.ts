import { PlayerController } from "../controllers/PlayerController";
import { KeyHandler } from "../core/KeyHandler";
import { BASE_PLAYER_VELOCITY } from "../variables/Constants";

export const applyDefaultPlayerControls = (player: PlayerController, keyHandler: KeyHandler) => {
   keyHandler.onKeyDown({
      key: 'A',
      allowRepeat: false,
      listener: () => player.addAcceleration({ id: 'AKEY', x: -BASE_PLAYER_VELOCITY, y: 0 })
   })
   keyHandler.onKeyDown({
      key: 'D',
      allowRepeat: false,
      listener: () => player.addAcceleration({ id: 'DKEY', x: BASE_PLAYER_VELOCITY, y: 0 })
   })
   keyHandler.onKeyDown({
      key: 'W',
      allowRepeat: false,
      listener: () => player.addAcceleration({ id: 'WKEY', x: 0, y: -BASE_PLAYER_VELOCITY })
   })
   keyHandler.onKeyDown({
      key: 'S',
      allowRepeat: false,
      listener: () => player.addAcceleration({ id: 'SKEY', x: 0, y: BASE_PLAYER_VELOCITY })
   })
   keyHandler.onKeyUp({
      key: 'A',
      allowRepeat: false,
      listener: () => player.removeAcceleration('AKEY')
   })
   keyHandler.onKeyUp({
      key: 'D',
      allowRepeat: false,
      listener: () => player.removeAcceleration('DKEY')
   })
   keyHandler.onKeyUp({
      key: 'W',
      allowRepeat: false,
      listener: () => player.removeAcceleration('WKEY')
   })
   keyHandler.onKeyUp({
      key: 'S',
      allowRepeat: false,
      listener: () => player.removeAcceleration('SKEY')
   })
}