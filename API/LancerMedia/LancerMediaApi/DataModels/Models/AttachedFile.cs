using System;
using System.Collections.Generic;

namespace LancerMediaApi.DataModels.Models;

public partial class AttachedFile
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public string? FileName { get; set; }

    public string? FilePath { get; set; }

    public long? FileSize { get; set; }

    public string? ContentType { get; set; }

    public string? Type { get; set; }

    public int? Order { get; set; }

    public string? ImgDimensions { get; set; }

    public string? ImgDimensionsSmall { get; set; }

    public bool? IsThumbnail { get; set; }

    public Guid? RelatedId { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;

    public string? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;

    public bool? DeletedFlg { get; set; }
}
