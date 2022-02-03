import { defaultReq } from "../../api/axios"
import requests from "../../api/requests"
import { authTypes } from "../constants/types"
import Cookie from "js-cookie"

export const register = userData => {
    return async dispatch => {

        dispatch({ type: authTypes.REGISTER_REQUEST })

        try {
            const res = await defaultReq.post(requests.register, userData)
            if (res.status === 201) {
                const data = res.data

                dispatch({
                    type: authTypes.REGISTER_SUCCESS,
                    payload: { ...data.user, access_token: data.access_token }
                })

                Cookie.set('refresh_token', data.refresh_token, {
                    path: 'api/auth/accessToken',
                    expires: 7
                })

                localStorage.setItem('isLoggedIn', true)
            }
        } catch (err) {
            console.log(err)
            const errors = err.response?.data.errors
            dispatch({
                type: authTypes.REGISTER_FAILURE,
                payload: errors
            })
        }
    }
}

export const login = userData => {
    return async dispatch => {

        dispatch({ type: authTypes.LOGIN_REQUEST })

        try {
            const res = await defaultReq.post(requests.login, userData)
            if (res.status === 201) {
                const data = res.data

                dispatch({
                    type: authTypes.LOGIN_SUCCESS,
                    payload: { ...data.user, access_token: data.access_token }
                })

                Cookie.set('refresh_token', data.refresh_token, {
                    path: 'api/auth/accessToken',
                    expires: 7
                })

                localStorage.setItem('isLoggedIn', true)
            }
        } catch (err) {
            console.log(err)
            const errors = err.response?.data.errors
            dispatch({
                type: authTypes.LOGIN_FAILURE,
                payload: errors
            })
        }
    }
}

export const isTokenValid = () => {
    return async dispatch => {

        const isLoggedIn = localStorage.getItem('isLoggedIn')

        if (isLoggedIn) {
            try {
                const res = await defaultReq.get(requests.getToken)
                if (res.status === 201) {
                    const data = res.data

                    dispatch({
                        type: authTypes.LOGIN_SUCCESS,
                        payload: { ...data.user, access_token: data.access_token }
                    })
                }
            } catch (err) {
                console.log(err)
                return localStorage.removeItem('isLoggedIn')
            }
        }
    }
}

export const logout = () => {
    return async dispatch => {

        Cookie.remove('refresh_token', { path: 'api/auth/accessToken' })

        localStorage.removeItem('isLoggedIn')

        dispatch({ type: 'LOGOUT' })
    }
}
