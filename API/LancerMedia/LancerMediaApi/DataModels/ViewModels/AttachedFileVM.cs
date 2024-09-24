using System.Text.Json.Serialization;

namespace LancerMediaApi.DataModels.ViewModels;

public partial class AttachedFileVM
{   

    public Guid Id { get; set; }

    public string? FileName { get; set; }

    [JsonIgnore]
    public string? FilePath { get; set; }

    public string? FileUrl { get; set; }

    public int? Order { get; set; }

    public string? ImgDimensions { get; set; }

    public string? ImgDimensionsSmall { get; set; }

    public bool? IsThumbnail { get; set; }
}
