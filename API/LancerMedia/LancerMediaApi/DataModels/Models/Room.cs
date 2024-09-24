using System;
using System.Collections.Generic;

namespace LancerMediaApi.DataModels.Models;

public partial class Room
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Type { get; set; }

    public decimal? Price { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;

    public string? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;

    public bool? DeletedFlg { get; set; }
}
