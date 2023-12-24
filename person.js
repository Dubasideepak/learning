var person = {
    name: "Shiva",
    age: 25,
    gender: "Male",
    phoneNumbers: [
        {
            phone: 9090909090,
            whatsapp: false,
            sim:'Airtel'
        },
        {
            phone: 9191919191,
            whatsapp: true,
            sim:'JIO'
        },
    ],
    relatives: {
        fathersSide: [
            {
                name: "Srinivas",
                age: 50,
                relation: "Brother",
                address: {
                    hno: "123-12-12",
                    city: "Wardhannapet",
                    district: "Warangal Rural",
                    pincode: 506313,
                    country: "India",
                    phoneNumbers: [
                        {
                            phone: 93939393993,
                            whatsapp: true,
                            sim:'Airtel'
                        },
                        {
                            phone: 9494949494,
                            whatsapp: true,
                            sim:'JIO'
                        },
                    ],
                }
            },
        ],
        mothersSide: [
            {
                name: "Yellaswamy",
                age: 45,
                relation: "Babai",
                address: {
                    hno: "234-5-5",
                    city: "Hyderabad",
                    district: "Sanga Reddy",
                    pincode: 502032,
                    country: "India",
                    phoneNumbers: [
                        {
                            phone: 9595959595,
                            whatsapp: true,
                            sim:'Airtel'
                        },
                        {
                            phone: 98989898989,
                            whatsapp: true,
                            sim:'JIO'
                        },
                    ],
                }
            },
            {
                name: "Srilatha",
                age: 42,
                relation: "Pinni",
                address: {
                    hno: "234-5-5",
                    city: "Hyderabad",
                    district: "Sanga Reddy",
                    pincode: 502032,
                    country: "India",
                    phoneNumbers: [
                        {
                            phone: 9797979797,
                            whatsapp: true,
                            sim:'Airtel'
                        },
                        {
                            phone: 9393939393,
                            whatsapp: true,
                            sim:'JIO'
                        },
                    ],
                }
            }
        ]
    }
};
console.log(person.relatives.fathersSide[0].address.phoneNumbers["0"].phone)
console.log(person.relatives.fathersSide[0].address.phoneNumbers["1"].phone)

// Deepak Question 
// Print the Srinivas whatsapp number (2 whatsapp numbers)

// Chintu Question
// Print the Yellaswamy pincode and JIO SIM

// Manoj Question
// Print Persons his phone numbers and sim names