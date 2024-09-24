using System;
using System.Collections.Generic;

namespace LancerMediaApi.DataModels.ViewModels;

public partial class RoomVM
{
    public Guid? Id { get; set; } = Guid.NewGuid();

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Type { get; set; }

    public decimal? Price { get; set; }

    public ICollection<AttachedFileVM> AttachedFiles { get; set; } = new List<AttachedFileVM>();
}

public partial class CreateRoomVM
{
    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Type { get; set; }

    public decimal? Price { get; set; }

    public IFormFile? Files { get; set; }
}

