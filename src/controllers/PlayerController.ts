import { IAccelerationData } from "../interfaces/IAccelerationData"

export class PlayerController{
   
   public x: number = 0
   public y: number = 0
   public width: number = 50
   public height: number = 50
   public health: number = 3
   public maxHealth: number = 3
   private accelerations: IAccelerationData[] = []

   public handleAccelerations(): void {      
      this.accelerations.forEach(({ x, y }) => {
         this.x += x
         this.y += y
      })
   }

   public addAcceleration(acceleration: IAccelerationData){
      this.accelerations.push(acceleration)
   }

   public removeAcceleration(id: string){
      this.accelerations.splice(this.accelerations.findIndex(acceleration => acceleration.id === id), 1)
   }
}