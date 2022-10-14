import { useSelector } from 'react-redux'
import Pagination from '../../../../components/pagination/pagination'
import TRootState from '../../../../store/root.types'
import PendingOrderFuelList from './pending-order-fuel-list'
import PendingOrders from '../pending-orders'
import React from 'react'

const PendingOrderFuel = () => {

    const orderCount = useSelector((state: TRootState) => state.orders?.orderFuelData?.count)

    return (
        <PendingOrders >
            {(sort: string, setSort: React.Dispatch<React.SetStateAction<string>>, setSortBy: React.Dispatch<React.SetStateAction<string>>, page:number, setPage: React.Dispatch<React.SetStateAction<number>>, fetchOrdersByFilter: Function) => (
                <div className="card-body p-0">
                    <Pagination
                        ItemsComponent={PendingOrderFuelList}
                        dispatchAction={fetchOrdersByFilter}
                        pageCount={orderCount}
                        filter={sort}
                        setFilter={setSort}
                        setFilterBy={setSortBy}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            )}
        </PendingOrders>
    )
}

export default PendingOrderFuel