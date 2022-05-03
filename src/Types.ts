export interface StatusType {
    id: string
    created: string,
    disruption: Disruption[]
    lineId: string
    reason: string
    statusSeverity: number
    statusSeverityDescription: string
    validityPeriods: Period[]
}

interface Disruption {
    additionalInfo: string
    affectedRoutes: Route[]
    affectedStops: Stops[]
    category: string
    categoryDescription: string
    closureText: string
    created: string
    description: string
}

interface Period {
    fromDate: string
    toDate: string
    isNow: boolean
}

interface Route {
    destinationName: string
    direction: string
    id: string
    isEntireRouteSection: boolean
    name: string
    originationName: string
    routeSectionNaptanEntrySequence: any
}

interface Stops {
    commonName: string
    id: string
    lat: number
    lon: number
    naptanId: string
    stationNaptan: string
    status: boolean
}

export interface ServiceType {
    name: string
    uri: string
}