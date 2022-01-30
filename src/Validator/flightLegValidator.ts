import { FlightLeg } from "../Model/FlightLeg";
import { flightLegSchema } from "../Schema/flightLegSchema";


export async function  validateFlightLegSchema(fleg: FlightLeg) {
    return flightLegSchema.validate(fleg, { abortEarly: false})
}