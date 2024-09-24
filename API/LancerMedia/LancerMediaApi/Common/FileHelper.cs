namespace LancerMediaApi.Common
{
    public static class FileHelper
    {
#if Debug
        public const string urlSiteImage = "https://localhost:7184";
#else
        public const string urlSiteImage = "https://lancermedia.vn";
#endif

        public static string GetUrlImageFromAbsolutePath(string root, string absolutePath)
        {
            if (!string.IsNullOrEmpty(root))
            {
                return absolutePath.Replace(root, urlSiteImage).Replace(@"\", "/");
            }
            else
            {
                return absolutePath.Replace(@"\", "/");
            }
        }
    }
}
