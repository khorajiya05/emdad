import { useSelector } from 'react-redux'
import Pagination from '../../../../components/pagination/pagination'
import TRootState from '../../../../store/root.types'
import OrdersHistory from '../orders-history'
import OrderHistoryFuelList from './order-history-fuel-llist'

const OrderHistoryFuel = () => {

  const orderCount = useSelector((state: TRootState) => state.orders?.orderFuelData?.count)
  
  return (
    <OrdersHistory>
      {(sort: string, setSort: React.Dispatch<React.SetStateAction<string>>, setSortBy: React.Dispatch<React.SetStateAction<string>>, page: number, setPage: React.Dispatch<React.SetStateAction<number>>, fetchOrdersByFilter: Function) => (
        <div className="card-body p-0">
          <Pagination
            ItemsComponent={OrderHistoryFuelList}
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
    </OrdersHistory>


  )
}

export default OrderHistoryFuel