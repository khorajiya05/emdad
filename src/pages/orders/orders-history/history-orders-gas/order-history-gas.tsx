import Pagination from '../../../../components/pagination/pagination'
import OrderHistoryGasList from './order-history-gas-list'
import OrdersHistory from '../orders-history'

function OrderHistoryGas() {
  return (
    <OrdersHistory>
      {
        (fetchOrdersByFilter:Function) => (
          <div className="card-body p-0">
            {/* <Pagination ItemsComponent={OrderHistoryGasList} dispatchAction={fetchOrdersByFilter} /> */}
          </div>
        )
      }
    </OrdersHistory>
  )
}

export default OrderHistoryGas