import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../lib/authSlice'

export default function GitTokenWhenRefresh() {
    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem('tkn');
        if (token) {
            dispatch(setToken(token));
        }
    },[])
  return null
}
