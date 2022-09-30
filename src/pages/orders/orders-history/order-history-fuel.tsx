import React from 'react'
import Pagination from '../../../components/pagination/pagination'
import OrdersHistory from './orders-history'
import OrderHistoryFuelList from './order-history-fuel-llist'

const OrderHistoryFuel = () => {
    return (
        <OrdersHistory>
            <div className="card-body p-0">
                <Pagination ItemsComponent={OrderHistoryFuelList} />
            </div>
        </OrdersHistory>


    )
}

export default OrderHistoryFuel