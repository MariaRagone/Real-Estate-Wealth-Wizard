using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace FinalProject.Models;

public partial class RealEstateDbContext : DbContext
{
    public RealEstateDbContext()
    {
    }

    public RealEstateDbContext(DbContextOptions<RealEstateDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer(Secret.optionsBuilder);

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3213E83FF821BBF4");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.GoogleId)
                .HasMaxLength(255)
                .HasColumnName("googleID");
            entity.Property(e => e.PropertyId)
                .HasMaxLength(255)
                .HasColumnName("propertyID");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3213E83F2552E60C");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ClosingCost).HasColumnName("closingCost");
            entity.Property(e => e.DownPayment).HasColumnName("downPayment");
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .HasColumnName("firstName");
            entity.Property(e => e.GoogleId)
                .HasMaxLength(255)
                .HasColumnName("googleID");
            entity.Property(e => e.InterestRate).HasColumnName("interestRate");
            entity.Property(e => e.LastName)
                .HasMaxLength(255)
                .HasColumnName("lastName");
            entity.Property(e => e.Loan).HasColumnName("loan");
            entity.Property(e => e.LoanTerm).HasColumnName("loanTerm");
            entity.Property(e => e.ManagementFee).HasColumnName("managementFee");
            entity.Property(e => e.MaxPrice).HasColumnName("maxPrice");
            entity.Property(e => e.NumberOfBedrooms).HasColumnName("numberOfBedrooms");
            entity.Property(e => e.VacancyRate).HasColumnName("vacancyRate");
            entity.Property(e => e.ZipCode)
                .HasMaxLength(255)
                .HasColumnName("zipCode");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
