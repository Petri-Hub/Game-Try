export type IKeyListener = {
   key: string,
   allowRepeat: boolean,
   listener: () => unknown,
}