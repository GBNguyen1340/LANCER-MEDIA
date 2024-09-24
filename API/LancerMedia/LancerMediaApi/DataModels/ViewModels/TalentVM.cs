using LancerMediaApi.Common;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;

namespace LancerMediaApi.DataModels.ViewModels;

public partial class TalentVM
{
    public Guid Id { get; set; }

    public string? Name { get; set; }

    public int? Followers { get; set; }

    public int? Views { get; set; }

    public string? talentInfo { get; set; }

    public string? Avatar
    {
        get; set;
    }

    public string? FacebookUrl { get; set; }

    public string? Xurl { get; set; }

    public string? InstagramUrl { get; set; }

    public string? YoutubeChannel { get; set; }

    public string? WebsiteUrl { get; set; }

    public string? ThreadUrl { get; set; }

    public AttachedFileVM? AttachedFile { get; set; } = new AttachedFileVM();
}


public partial class CreateTalentVM
{
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

    public IFormFile? File { get; set; }
}