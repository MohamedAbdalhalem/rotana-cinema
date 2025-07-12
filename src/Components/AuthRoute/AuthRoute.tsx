import { useSelector } from "react-redux"
import { ourStoreType } from "../../lib/store"
import React from "react"
import { Navigate } from "react-router"

export default function AuthRoute({children} : {children : React.ReactNode}) {
    const { token } = useSelector(((state: ourStoreType) => state.authsilce))
    if (token) {
        return children
    }
    return <Navigate to='/login'/>
}
