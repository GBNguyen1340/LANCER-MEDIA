using System;
using System.Collections.Generic;

namespace LancerMediaApi.DataModels.Models;

public partial class Talent
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public string? Name { get; set; }

    public int? Followers { get; set; }

    public int? Views { get; set; }

    public string? TalentInfo { get; set; }

    public string? Avatar { get; set; }

    public string? FacebookUrl { get; set; }

    public string? Xurl { get; set; }

    public string? InstagramUrl { get; set; }

    public string? YoutubeChannel { get; set; }

    public string? WebsiteUrl { get; set; }

    public string? ThreadUrl { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; } = DateTime.UtcNow;

    public string? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; } = DateTime.UtcNow;

    public bool? DeletedFlg { get; set; }
}
