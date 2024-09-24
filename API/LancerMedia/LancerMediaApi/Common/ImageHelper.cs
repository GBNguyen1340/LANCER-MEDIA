using System.Drawing;
using System.Xml.Linq;
using SkiaSharp;

namespace LancerMediaApi.Common
{
    public static class ImageHelper
    {
        public static (byte[], int, int) Resize(byte[] fileContents, int maxWidth, int maxHeight, SKFilterQuality quality = SKFilterQuality.High)
        {
            using MemoryStream ms = new MemoryStream(fileContents);
            using SKBitmap sourceBitmap = SKBitmap.Decode(ms);

            //Get the image current width  
            int sourceWidth = sourceBitmap.Width;
            //Get the image current height  
            int sourceHeight = sourceBitmap.Height;

            if (sourceWidth <= maxWidth)
            {
                return (fileContents, sourceWidth, sourceHeight);
            }

            float nPercentW = 0;
            //Calulate  width with new desired size  
            nPercentW = ((float)maxWidth / (float)sourceWidth);

            //New Width  
            int destWidth = (int)(sourceWidth * nPercentW);
            //New Height  
            int destHeight = (int)(sourceHeight * nPercentW);

            using SKBitmap scaledBitmap = sourceBitmap.Resize(new SKImageInfo(destWidth, destHeight), quality);
            using SKImage scaledImage = SKImage.FromBitmap(scaledBitmap);
            using SKData data = scaledImage.Encode(SKEncodedImageFormat.Jpeg, 75);

            return (data.ToArray(), destWidth, destHeight);
        }
    }
}
