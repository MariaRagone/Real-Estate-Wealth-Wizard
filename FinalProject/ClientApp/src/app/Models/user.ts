export interface User {
    id: number;
    googleId: string;
    firstName: string;
    lastName: string;
    downPayment: number;
    zipCode: string;
    loanTerm: number;
    interestRate: number;
    loan: boolean;
    closingCost: number;
}
