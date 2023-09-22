        export interface AverageRateModel {
            status: number;
            data: AverageRateData;
        }
    
        export interface AverageRateData {
            average_rent_price: number;
            mortgage_data: MortgageData;
            average_recent_sold_price: number;
            reference_price: number;
            average_sale_price: number;
            for_sale_count: number;
        }
    
        export interface MortgageData {
            average_rates: AverageRate[];
            average_rate: AverageRate;
            insurance_rate: string;
            property_tax: string;
        }
    
        export interface AverageRate {
            thirty_year_fha: number;
            thirty_year_va: number;
            ten_year_fix: number;
            fifteen_year_fix: number;
            thirty_year_fix: number;
            five_one_arm: number;
            seven_one_arm: number;
            twenty_year_fix: number;
        }
    
        export interface AverageRates {
            loan_type: LoanType;
            rate: number;
        }
    
        export interface LoanType {
            loan_id: string;
            display_name: string;
            is_fixed: boolean;
            term: number;
            is_va_loan: boolean;
        }

