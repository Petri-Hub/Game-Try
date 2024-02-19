import { IKeyListener } from "../interfaces/IKeyListener"

export class KeyHandler {

   private onKeyDownListeners: IKeyListener[] = []
   private onKeyUpListener: IKeyListener[] = []

   constructor() {
      window.addEventListener('keydown', this.handleKeyDown.bind(this))
      window.addEventListener('keyup', this.handleKeyUp.bind(this))
   }

   public destroy(){
      window.removeEventListener('keydown', this.handleKeyDown.bind(this))
      window.removeEventListener('keydown', this.handleKeyUp.bind(this))
   }

   public onKeyDown({ key, listener, allowRepeat = false }: IKeyListener) {
      this.onKeyDownListeners.push({
         key,
         listener,
         allowRepeat
      })
   }

   public onKeyUp({ key, listener, allowRepeat = false }: IKeyListener) {
      this.onKeyUpListener.push({
         key,
         listener,
         allowRepeat
      })
   }

   private handleKeyDown({ key, repeat }: KeyboardEvent) {
      this.onKeyDownListeners
         .filter(keyListener => this.isListenerForKey(keyListener, key))
         .filter(keyListener => repeat ? keyListener.allowRepeat : true)
         .forEach(keyListener => keyListener.listener())
   }

   private handleKeyUp({ key, repeat }: KeyboardEvent) {
      this.onKeyUpListener
         .filter(keyListener => this.isListenerForKey(keyListener, key))
         .filter(keyListener => repeat ? keyListener.allowRepeat : true)
         .forEach(keyListener => keyListener.listener())
   }

   private isListenerForKey(keyListener: IKeyListener, key: string) {
      return keyListener.key === key.toUpperCase()
   }
}