﻿using System;
using System.Collections.Generic;

namespace FinalProject.Models;

public partial class User
{
    public int Id { get; set; }

    public string? GoogleId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public double? DownPayment { get; set; }

    public string? ZipCode { get; set; }

    public int? LoanTerm { get; set; }

    public double? InterestRate { get; set; }

    public bool? Loan { get; set; }

    public double? ClosingCost { get; set; }

    public double? MaxPrice { get; set; }

    public double? VacancyRate { get; set; }

    public double? NumberOfBedrooms { get; set; }

    public double? ManagementFee { get; set; }
}
