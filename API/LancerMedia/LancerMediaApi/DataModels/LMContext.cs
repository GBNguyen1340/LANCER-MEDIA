using System;
using System.Collections.Generic;
using LancerMediaApi.DataModels.Models;
using Microsoft.EntityFrameworkCore;

namespace LancerMediaApi.DataModels;

public partial class LMContext : DbContext
{
    public LMContext()
    {
    }

    public LMContext(DbContextOptions<LMContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AttachedFile> AttachedFiles { get; set; }

    public virtual DbSet<Content> Contents { get; set; }

    public virtual DbSet<Room> Rooms { get; set; }

    public virtual DbSet<Talent> Talents { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=ConnectionStrings:LancerDBConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AttachedFile>(entity =>
        {
            entity.ToTable("AttachedFile");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.ContentType)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.DeletedFlg).HasDefaultValueSql("((0))");
            entity.Property(e => e.FileName).HasMaxLength(500);
            entity.Property(e => e.FilePath)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.ImgDimensions).HasMaxLength(30);
            entity.Property(e => e.ImgDimensionsSmall).HasMaxLength(30);
            entity.Property(e => e.ModifiedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.Type)
                .HasMaxLength(500)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Content>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.FullContent).HasColumnName("FullContent");
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.DeletedFlg).HasDefaultValueSql("((0))");
            entity.Property(e => e.ModifiedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.Slug).HasMaxLength(400);
            entity.Property(e => e.Summary).HasMaxLength(3000);
            entity.Property(e => e.ThumbnailImgUrl)
                .HasMaxLength(400)
                .IsUnicode(false);
            entity.Property(e => e.Title).HasMaxLength(300);
            entity.Property(e => e.Type).HasMaxLength(20);
        });

        modelBuilder.Entity<Room>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.DeletedFlg).HasDefaultValueSql("((0))");
            entity.Property(e => e.ModifiedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(200);
            entity.Property(e => e.Price).HasColumnType("decimal(18, 0)");
            entity.Property(e => e.Type).HasMaxLength(100);
        });

        modelBuilder.Entity<Talent>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Avatar).IsUnicode(false);
            entity.Property(e => e.CreatedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.DeletedFlg).HasDefaultValueSql("((0))");
            entity.Property(e => e.FacebookUrl)
                .HasMaxLength(400)
                .IsUnicode(false);
            entity.Property(e => e.InstagramUrl)
                .HasMaxLength(400)
                .IsUnicode(false);
            entity.Property(e => e.ModifiedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(200);
            entity.Property(e => e.ThreadUrl)
                .HasMaxLength(400)
                .IsUnicode(false);
            entity.Property(e => e.WebsiteUrl)
                .HasMaxLength(400)
                .IsUnicode(false);
            entity.Property(e => e.Xurl)
                .HasMaxLength(400)
                .IsUnicode(false)
                .HasColumnName("XUrl");
            entity.Property(e => e.YoutubeChannel)
                .HasMaxLength(400)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
