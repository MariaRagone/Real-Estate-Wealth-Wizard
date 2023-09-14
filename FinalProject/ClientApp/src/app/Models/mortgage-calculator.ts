export interface MortgageCalculatorModel {
    status: number;
    data: MortgageData;
  }
  export interface MortgageData {
    closing_cost_rate: string;
    due_at_close: number;
    amortizations: MortgageAmortization[];
    term: number;
    monthly_payment: number;
    total_payment: number;
    monthly_property_taxes: number;
    loan_type: string;
    monthly_mortgage_insurance: number;
    closing_cost: number;
    monthly_home_insurance: number;
    rate: number;
    principal_and_interest: number;
    hoa_fees: number;
    loan_amount: number;
  }
  export interface MortgageAmortization {
    interest: number;
    principal: number;
    monthly_amortization: MortgageMonthlyAmortization[];
    interest_paid: number;
  }
  export interface MortgageMonthlyAmortization {
    interest: number;
    principal: number;
    interest_paid: number;
    balance: number;
  }