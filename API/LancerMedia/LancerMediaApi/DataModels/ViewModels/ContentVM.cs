using System;
using System.Collections.Generic;

namespace LancerMediaApi.DataModels.ViewModels;

public partial class ContentVM
{
    public Guid Id { get; set; }

    public string? Title { get; set; }

    public string? Slug { get; set; }

    public string? Summary { get; set; }

    public string? FullContent { get; set; }

    public string? Type { get; set; }

    public Guid? ThumbnailId { get; set; }

    public string? ThumbnailImgUrl { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public DateTime? CreatedDate { get; set; }

    public IFormFile? File { get; set; }
}
