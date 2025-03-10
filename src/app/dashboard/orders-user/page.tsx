import OrdersUserT from "@/components/template/OrdersUserT"
import { authOptions } from "@/utils/auth"
import { getServerSession } from "next-auth/next"

async function OrdersUserPage() {
  const session=await getServerSession(authOptions)
  return (
    <OrdersUserT username={session.user.username} />
  )
}

export default OrdersUserPage