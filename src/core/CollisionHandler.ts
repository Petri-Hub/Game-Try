import { IEntity } from "../interfaces/IEntity"

export class CollisionHandler {

   private entities: IEntity[]

   constructor(entities: IEntity[] = []) {
      this.entities = entities
   }

   public handleCollisions() {
      for (let i = 0; i < this.entities.length; i++) {
         for (let j = 0; j < this.entities.length; j++) {
            
            const reference = this.entities[i]
            const comparator = this.entities[j]
            
            //Caso for mesma entidade
            if (reference === comparator) {
               continue
            }

            //Colidindo
            if (this.isColliding(reference, comparator)) {
               
            }
         }
      }
   }

   private isColliding(entityA: IEntity, entityB: IEntity): boolean {
      return this.isCollidingHorizontally(entityA, entityB)
         && this.isCollidingVertically(entityA, entityB)
   }

   private isCollidingHorizontally(entityA: IEntity, entityB: IEntity): boolean {
      return (entityA.x <= entityB.x && (entityA.x + entityA.width) > entityB.x)
         || (entityB.x <= entityA.x && (entityB.x + entityB.width) > entityA.x)
   }

   private isCollidingVertically(entityA: IEntity, entityB: IEntity): boolean {
      return (entityA.y <= entityB.y && (entityA.y + entityA.height) > entityB.y)
         || (entityB.y <= entityA.y && (entityB.y + entityB.height) > entityA.y)
   }
}