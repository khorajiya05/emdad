import Pagination from '../../../components/pagination/pagination'
import PendingOrderFuelList from './pending-order-fuel-list'
import PendingOrders from './pending-orders'

const PendingOrderFuel = () => {
    return (
        <PendingOrders>
            {(fetchOrdersByFilter: Function) => (
                <div className="card-body p-0">
                    <Pagination ItemsComponent={PendingOrderFuelList} dispatchAction={fetchOrdersByFilter} />
                </div>
            )}
        </PendingOrders>
    )
}

export default PendingOrderFuel