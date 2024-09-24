using AutoMapper;
using LancerMediaApi.DataModels.Models;
using LancerMediaApi.DataModels.ViewModels;

namespace LancerMediaApi.AutoMapConfig
{
    public class ViewModelToModel : Profile
    {
        public ViewModelToModel()
        {
            CreateMap<ContentVM, Content>();
            CreateMap<AttachedFileVM, AttachedFile>();
            CreateMap<TalentVM, Talent>();
            CreateMap<RoomVM, Room>();
            CreateMap<CreateRoomVM, Room>();
        }
    }
}
