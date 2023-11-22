const financialData = require("./financial.json");

// 1. How much money was spent in 2014

function totalSpending2014 (){
   return financialData.reduce((counter, transaction)=>{return counter += parseInt(transaction.cost)},0)
};

console.log(totalSpending2014()); //49541


// 2. Earnings per company

function EarningsPerCompany(data) {
    let companies = [];
    
    data.map(transaction => {
        if (!companies.includes(transaction.detailsOfPayent.company)) {
            companies.push(transaction.detailsOfPayent.company);
        }
    });

    return companies.map(company => {
        const transactionsForCompany = data.filter(transaction => transaction.detailsOfPayent.company === company);
        const totalEarnings = transactionsForCompany.reduce((sum, transaction) => sum + parseInt(transaction.cost), 0);

        return {
            company: company,
            totalEarnings: totalEarnings
        };
    });
}


console.log(EarningsPerCompany(financialData));


// 3. Spendings per transaction type

function spendingPerTransactionType(data){
    let transactionsType = [];

    data.map(transaction => !transactionsType.includes(transaction.detailsOfPayent.Type) ? transactionsType.push(transaction.detailsOfPayent.Type) : null )

    transactionsType.sort()

    return transactionsType.map((transactionType) => { 
       let transactionPerType = data.filter(transaction => transaction.detailsOfPayent.Type === transactionType);
       let totalSpendingByTransactionType = transactionPerType.reduce((sum, transaction) => sum += parseInt(transaction.cost),0)

       return {
        transactionType : transactionType,
        totalSpendingByTransactionType: totalSpendingByTransactionType
       }
    });
};

console.log(spendingPerTransactionType(financialData));


// 4. Spendings by month


const months = ["Styczeń", "Luty","Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

function spendingByMonth (data) { 

    return months.map((month) => {
        const transactionsForMonth = data.filter(transaction => getMonth(transaction.detailsOfPayent.date) === month);
    
        const totalSpendingPerMonth = transactionsForMonth.reduce((sum, transaction) => {
            return sum + parseInt(transaction.cost);
        }, 0);
    
        return {
            month: month,
            totalSpendingPerMonyh: totalSpendingPerMonth,
        };
    });
};

function getMonth(dateString) {
    
    const dateParts = dateString.split("-");
    const date = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    const monthIndex = date.getMonth();
    return months[monthIndex];
}

console.log(spendingByMonth(financialData));


// 5. Spendings per day of the week

const daysOfWeek = ["Niedziela", "Poniedziałek","Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

function spendingPerDayOfWeek(data) {

    return daysOfWeek.map((day) => {
        const transactionsForDay = data.filter(transaction => getDayOfWeek(transaction.detailsOfPayent.date) === day);

        const totalSpendingPerDay = transactionsForDay.reduce((sum, transaction) => {
            return sum + parseInt(transaction.cost);
        }, 0);

        return {
            day: day,
            totalSpendingPerDayOfWeek: totalSpendingPerDay,
        };
    });
}

function getDayOfWeek(dateString) {

    const dateParts = dateString.split("-");
    const date = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

console.log(spendingPerDayOfWeek(financialData));