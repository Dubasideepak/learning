var application = {
    name: "paytm",
    type: "savings",
    paymentMethod: [
        {
            phone: 9603658972,
            upi:   '9603658972@ybl'

        },
        
    ],
    history: [
        {
            sendingAmount: 3000,
            receivingAmount: 2000,
            totalBalance: 5000, 
        }
    ]
   
    };

console.log(application.history)