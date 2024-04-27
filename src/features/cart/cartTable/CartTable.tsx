import TableBody from "./TableBody"
import TableHeader from "./TableHeader"


const CartTable = () => {
  return (
    <table className="w-full flex-1 text-[14px] border-b-2">
        <TableHeader />
        <TableBody />
    </table>
  )
}

export default CartTable