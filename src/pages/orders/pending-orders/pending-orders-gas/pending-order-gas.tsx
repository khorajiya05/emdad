import Pagination from '../../../../components/pagination/pagination'
import PendingOrderGasList from './pending-order-gas-list'
import PendingOrders from '../pending-orders'

const PendingOrderGas = () => {
    return (
        <PendingOrders>
            {(fetchOrdersByFilter: Function) => (

                <div className="card-body p-0">
                    {/* <Pagination ItemsComponent={PendingOrderGasList} dispatchAction={fetchOrdersByFilter} /> */}
                </div>
            )}
        </PendingOrders>
    )
}

export default PendingOrderGas