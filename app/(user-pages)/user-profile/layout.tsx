import { PurchaseGuardProvider } from "@/providers/purchase.provider"

const UserProfileLayout : React.FC<IChildren> = ({children})=>{
    return <PurchaseGuardProvider>{children}</PurchaseGuardProvider>
}
export default UserProfileLayout;