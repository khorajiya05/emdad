import Pagination from '../../../components/pagination/pagination'
import PendingOrderGasList from './pending-order-gas-list'
import PendingOrders from './pending-orders'

const PendingOrderGas = () => {
    return (
        <PendingOrders>
            <div className="card-body p-0">
                <Pagination ItemsComponent={PendingOrderGasList} />
            </div>
        </PendingOrders>
    )
}

export default PendingOrderGas