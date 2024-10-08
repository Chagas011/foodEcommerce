import { currencyFormat } from "../../../../helpers/currencyFormat"
import { useCart } from "../../../../hooks/useCart"
import { Container } from "./style"
import { FaTrashAlt } from 'react-icons/fa'
import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'
import { ConfirmOrder } from "../../../../components/ConfirmOrder"
export function TableMobile() {
  const {
    cart,
    removeSnackFromCart,
    snackCartDecrement,
    snackCartIncrement} = useCart()

  return (
    <Container>
      {cart.map((item) => (
        <div key={`${item.snack}-${item.id}`} className="order-item">
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button type="button" onClick={() => snackCartDecrement(item)}>
                  <img src={minusImg} alt="decrementar" />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button type="button" onClick={() => snackCartIncrement(item)}>
                  <img src={plusImg} alt="acrescentar" />
                </button>
              </div>
              <button type="button" onClick={() => removeSnackFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span>Subtotal</span> {currencyFormat(item.subtotal)}
            </h5>
          </div>
        </div>
      ))}

      <ConfirmOrder />

    </Container>
  )
}
