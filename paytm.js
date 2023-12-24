var app = {
    name: "paytm",
    bank: "paytmPaymentBank",
    type: "savings",
    location: "useCurrent",
    mobileNumber: 9603658972,
    paymentMethod: [
        {
            paytmWallet: 9603658972,
        },
        {
           accountNumber: 919603658972

        },
        {
            ifscCode: "pytm0123456"
        },
        {
            upi:   '9603658972@ybl'

        },
        
    ],
    history: [
        {
            sendingAmount: 3000,
        },
        {
            receivingAmount: 2000,
        },
        {
            totalBalance: 5000, 
        }
    ],
   

    paytmOffers: [
        
                   {
                    mobileRecharge: "20 cashBack",
                   },
                   {
                    metroTicket: "30 cashBack",
                   },
                   {
                    busTicket: "50 cashBack"
                   }

    ]
}


console.log(app.paytmOffers[2])