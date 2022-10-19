import Pagination from '../../../../components/pagination/pagination'
import OrderHistoryGasList from './order-history-gas-list'
import OrdersHistory from '../orders-history'
import { useSelector } from 'react-redux'
import TRootState from '../../../../store/root.types'

function OrderHistoryGas() {

  const orderCount = useSelector((state: TRootState) => state.orders?.orderGasData?.count)

  return (
    <OrdersHistory>
      {(sort: string, setSort: React.Dispatch<React.SetStateAction<string>>, setSortBy: React.Dispatch<React.SetStateAction<string>>, page: number, setPage: React.Dispatch<React.SetStateAction<number>>, fetchOrdersByFilter: Function) => (
        <div className="card-body p-0">
          <Pagination
            ItemsComponent={OrderHistoryGasList}
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

export default OrderHistoryGas