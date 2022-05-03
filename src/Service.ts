import axios from 'axios'

const getServices = async () => {
    const response = await axios({
        method: 'GET',
        url: 'https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status',
        params: {
            detail: true
        }
    })

    return response.data
}

const cache: any = {}

const getBikePoints = async (term: string) => {
    if (cache[term]) {
        return { term, data: cache[term] }
    } else {
        const response = await axios({
            method: 'GET',
            url: 'https://api.tfl.gov.uk/BikePoint/Search',
            params: {
                query: term
            }
        })

        cache[term] = response.data

        return { term, data: response.data }
    }
}

export { getServices, getBikePoints }
