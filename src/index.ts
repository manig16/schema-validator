import { Airline, Airport, FlightLeg, StatusEnum }   from  './Model/FlightLeg'
import { flightLegSchema } from './Schema/flightLegSchema'


var al: Airline = {
    iataCode: 'AA',
    icaoCode: 'AAL'
}

var depAp: Airport = {
    iataCode: 'BOS'
}

var arrAp: Airport = {
    iataCode: 'LAX'
}

var depDate = new Date(2022,1,29,12,0,0);
var arrDate = new Date(2022,1,29,18,0,0)

var fleg: FlightLeg = {
    airline: al,
    flightNumber: 101,
    departureAirport: depAp,
    arrivalAirport: arrAp,
    std: depDate,
    sta: arrDate,
    status: StatusEnum.Scheduled,
    departureTerminal: 'A',
    arrivalTerminal: 'Terminal-4',
    aircraft: {
        registrationNumber: 'N2504X'
    }
}

const value = flightLegSchema.validate(fleg, { abortEarly: false})
if(value.error) {
    throw new Error(value.error.details[0].message)
}
console.log(`${JSON.stringify(value)}`)

