import React from 'react'
import Pagination from '../../../components/pagination/pagination'
import OrdersHistory from './orders-history'
import OrderHistoryFuelList from './order-history-fuel-llist'

const OrderHistoryFuel = () => {
    return (
        <OrdersHistory>
            {
        (fetchOrdersByFilter:Function) => (
          <div className="card-body p-0">
            <Pagination ItemsComponent={OrderHistoryFuelList} dispatchAction={fetchOrdersByFilter} />
          </div>
        )
      }
        </OrdersHistory>


    )
}

export default OrderHistoryFuel