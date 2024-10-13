import Chance from 'chance';
const chance = new Chance();

// Mock data generation consts
const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const randomCard = () => {
    const cardTypes = ['Visa', 'MasterCard', 'Amex'];
    return {
        type: chance.pickone(cardTypes),
        number: chance.cc(),
        expiry: chance.exp(),
        cvv: chance.integer({ min: 100, max: 999 })
    };
}

const randomFlightItinerary = (airports) => {
    const departureAirport = chance.pickone(airports);
    const arrivalAirport = chance.pickone(airports);
    return {
        flightNo: `FN${chance.integer({ min: 1000, max: 9999 })}`,
        departureAirport: departureAirport.IATA_FAA,
        arrivalAirport: arrivalAirport.IATA_FAA,
        departureDate: randomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)).toISOString(),
        returnDate: randomDate(new Date(2024, 0, 1), new Date(2024, 11, 31)).toISOString(),
        airline: chance.pickone(['Air Canada', 'United Airlines', 'Delta', 'WestJet'])
    };
}

const random = (airports) => {
    const fullName = chance.name();
    const dob = chance.birthday({ year: chance.year({ min: 1960, max: 2005 }) });
    const age = new Date().getFullYear() - dob.getFullYear();

    return {
        fullName: fullName,
        phoneNumber: chance.phone(),
        email: chance.email(),
        address: chance.address(),
        dob: dob.toISOString(),
        age: age,
        creditCardDetails: randomCard(),
        flightItinerary: randomFlightItinerary(airports),
        insuranceDetails: {
            provider: chance.pickone(['AIG', 'AXA', 'Allianz']),
            policyNo: chance.integer({ min: 100000, max: 999999 }).toString()
        },
        governmentId: {
            type: 'Passport',
            number: chance.integer({ min: 100000000, max: 999999999 }).toString()
        },
        nearbyAirports: [
            chance.pickone(airports).IATA_FAA,
            chance.pickone(airports).IATA_FAA
        ]
    };
}

// Mock airports from the provided JSON
const airports = [
    { IATA_FAA: "GKA" }, { IATA_FAA: "MAG" }, { IATA_FAA: "HGU" }, { IATA_FAA: "LAE" }, { IATA_FAA: "POM" }
    // Add other airports from your JSON file
];

// Generate 100 mock users
const users = Array.from({ length: 100 }, () => random(airports));

// Output result
console.log(JSON.stringify({ users: users }, null, 2));

export { randomDate, randomCard, randomFlightItinerary, random };
