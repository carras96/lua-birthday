import { API } from "../configs/axios"

export const useApi = () => {
    const getEventConfig = async () => {
        try {
            const { data } = await API.get('luaturns2/event/configs')
            return data
        } catch (error) {
            console.log('error', error)
            return null
        }
    }

    return {
        getEventConfig
    }
}