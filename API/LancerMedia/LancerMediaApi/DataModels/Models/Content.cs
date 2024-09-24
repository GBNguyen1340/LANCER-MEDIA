using System;
using System.Collections.Generic;

namespace LancerMediaApi.DataModels.Models;

public partial class Content
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public string? Title { get; set; }

    public string? Slug { get; set; }

    public string? Summary { get; set; }

    public string? FullContent { get; set; }

    public string? Type { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;

    public string? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;

    public bool? DeletedFlg { get; set; }

    public Guid? ThumbnailId { get; set; }

    public string? ThumbnailImgUrl { get; set; }
}
