using AutoMapper;
using LancerMediaApi.DataModels.Models;
using LancerMediaApi.DataModels.ViewModels;

namespace LancerMediaApi.AutoMapConfig
{
    public class ModelToViewModel : Profile
    {
        public ModelToViewModel()
        {
            CreateMap<Content, ContentVM>();
            CreateMap<AttachedFile, AttachedFileVM>();
            CreateMap<Talent, TalentVM>();
            CreateMap<Room, RoomVM>();
        }
    }
}
