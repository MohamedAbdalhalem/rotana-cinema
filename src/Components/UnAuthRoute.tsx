import { useSelector } from "react-redux"
import { ourStoreType } from "../../lib/store"
import React from "react"
import { Navigate } from "react-router"

export default function UnAuthRoute({children} : {children : React.ReactNode}) {
    const { token } = useSelector(((state: ourStoreType) => state.authsilce))
    if (token == null) {
        return children
    }
    return <Navigate to='/'/>
}
