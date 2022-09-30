import Pagination from '../../../components/pagination/pagination'
import PendingOrderFuelList from './pending-order-fuel-list'
import PendingOrders from './pending-orders'

const PendingOrderFuel = () => {
    return (
        <PendingOrders>
            <div className="card-body p-0">
                <Pagination ItemsComponent={PendingOrderFuelList} />
            </div>
        </PendingOrders>
    )
}

export default PendingOrderFuel