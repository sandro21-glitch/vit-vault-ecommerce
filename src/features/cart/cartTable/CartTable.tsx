import TableBody from "./TableBody"
import TableHeader from "./TableHeader"


const CartTable = () => {
  return (
    <table className="w-[60%] text-[14px] border-b-2">
        <TableHeader />
        <TableBody />
    </table>
  )
}

export default CartTable