import Pagination from '../../../components/pagination/pagination'
import OrderHistoryGasList from './order-history-gas-list'
import OrdersHistory from './orders-history'

function OrderHistoryGas() {
  return (
    <OrdersHistory>
    <div className="card-body p-0">
      <Pagination ItemsComponent={OrderHistoryGasList} />
    </div>
    </OrdersHistory>
  )
}

export default OrderHistoryGas