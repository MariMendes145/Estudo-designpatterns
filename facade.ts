import { Delivery, Pedido, cozinha } from "./subsystems";

export class Hamburguer{
    order(){
        const deposit = new Pedido()
        const pedido = new cozinha()
        const delivery = new Delivery()

        deposit.gethamburquer()
        pedido.separado()
        pedido.realizado()
        delivery.send()
        
    }
}