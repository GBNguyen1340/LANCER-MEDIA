const heroData = [
  {
    id: 1,
    title: "Lancer Media là đối tác MCN chính thức với nền tảng Tiktok",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGV2ZW50fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Quản lý và nhận booking talent và idol đa nền tảng",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title:
      "Nhận booking studio và thiết bị livestream game, livestream bán hàng đa nền tảng.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fHww",
  },
];

const talents = [
  {
    id: 1,
    name: "John Doe",
    followers: "40.000",
    views: "4000",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "John Doe 2",
    followers: "50.000",
    views: "5000",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Jane Smith",
    followers: "40.000",
    views: "47000",
    image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "John Doe",
    followers: "40.000",
    views: "7000",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Jane Smith",
    followers: "70.000",
    views: "1000",
    image: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "John Doe",
    followers: "40.000",
    views: "4000",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "John Doe 2",
    followers: "50.000",
    views: "5000",
    image: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Jane Smith",
    followers: "40.000",
    views: "47000",
    image: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    name: "John Doe",
    followers: "40.000",
    views: "7000",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    name: "Jane Smith",
    followers: "70.000",
    views: "1000",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
];

const posts = [
  {
    title: "Blog Post Title 1",
    summary:
      "This is a summary of blog post number 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishDate: "2024-03-13",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww", // Example random image URL
  },
  {
    title: "Blog Post Title 2",
    summary:
      "This is a summary of blog post number 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishDate: "2024-03-13",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2ZmaWNlfGVufDB8fDB8fHww", // Example random image URL
  },
  {
    title: "Blog Post Title 3",
    summary:
      "This is a summary of blog post number 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishDate: "2024-03-13",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D", // Example random image URL
  },
  {
    title: "Blog Post Title 4",
    summary:
      "This is a summary of blog post number 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishDate: "2024-03-13",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D", // Example random image URL
  },
];

const rooms = [
  {
    name: "studio 1",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sem augue, laoreet ac mi non, sollicitudin dictum lacus. Quisque vitae molestie lectus, id imperdiet tellus. Integer a tellus viverra, eleifend dui at, hendrerit eros. Pellentesque volutpat tellus augue, eu dignissim est dictum et. Sed bibendum nunc ex, sit amet consectetur sem tempor at. Cras quis accumsan eros. Nulla ultricies suscipit rhoncus. Nulla facilisi. Donec ac tincidunt est. Phasellus gravida imperdiet vulputate. Donec orci quam, gravida eu ante at, blandit cursus sapien.",
    price: "900.000",
    studio: [
      "Video Cameras",
      "Audio Equipment",
      "Mixing Equipment",
      "Encoders",
      "Control and Automation Equipment",
      "Mobile Live Streaming Equipment",
      "Streaming Equipment for Churches and Houses of Worship",
      "Video Streaming Accessories"
    ],
    images: [
      "https://images.unsplash.com/photo-1647427854253-b92bb40c9330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG8lMjBzdHVkaW98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615458508880-ec0521ce754f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1664817550969-5e76adc4a3fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
    ]
  },
  {
    name: "studio 2",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sem augue, laoreet ac mi non, sollicitudin dictum lacus. Quisque vitae molestie lectus, id imperdiet tellus. Integer a tellus viverra, eleifend dui at, hendrerit eros. Pellentesque volutpat tellus augue, eu dignissim est dictum et. Sed bibendum nunc ex, sit amet consectetur sem tempor at. Cras quis accumsan eros. Nulla ultricies suscipit rhoncus. Nulla facilisi. Donec ac tincidunt est. Phasellus gravida imperdiet vulputate. Donec orci quam, gravida eu ante at, blandit cursus sapien.",
    price: "900.000",
    studio: [
      "Video Cameras",
      "Audio Equipment",
      "Mixing Equipment",
      "Encoders",
      "Control and Automation Equipment",
      "Mobile Live Streaming Equipment",
      "Streaming Equipment for Churches and Houses of Worship",
      "Video Streaming Accessories"
    ],
    images: [
      "https://images.unsplash.com/photo-1664817550969-5e76adc4a3fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1647427854253-b92bb40c9330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG8lMjBzdHVkaW98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615458508880-ec0521ce754f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",      
    ]
  },
  {
    name: "studio 3",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sem augue, laoreet ac mi non, sollicitudin dictum lacus. Quisque vitae molestie lectus, id imperdiet tellus. Integer a tellus viverra, eleifend dui at, hendrerit eros. Pellentesque volutpat tellus augue, eu dignissim est dictum et. Sed bibendum nunc ex, sit amet consectetur sem tempor at. Cras quis accumsan eros. Nulla ultricies suscipit rhoncus. Nulla facilisi. Donec ac tincidunt est. Phasellus gravida imperdiet vulputate. Donec orci quam, gravida eu ante at, blandit cursus sapien.",
    price: "900.000",
    studio: [
      "Video Cameras",
      "Audio Equipment",
      "Mixing Equipment",
      "Encoders",
      "Control and Automation Equipment",
      "Mobile Live Streaming Equipment",
      "Streaming Equipment for Churches and Houses of Worship",
      "Video Streaming Accessories"
    ],
    images: [
      "https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1647427854253-b92bb40c9330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG8lMjBzdHVkaW98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1615458508880-ec0521ce754f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",      
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1664817550969-5e76adc4a3fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
    ]
  },
  {
    name: "studio 4",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sem augue, laoreet ac mi non, sollicitudin dictum lacus. Quisque vitae molestie lectus, id imperdiet tellus. Integer a tellus viverra, eleifend dui at, hendrerit eros. Pellentesque volutpat tellus augue, eu dignissim est dictum et. Sed bibendum nunc ex, sit amet consectetur sem tempor at. Cras quis accumsan eros. Nulla ultricies suscipit rhoncus. Nulla facilisi. Donec ac tincidunt est. Phasellus gravida imperdiet vulputate. Donec orci quam, gravida eu ante at, blandit cursus sapien.",
    price: "900.000",
    studio: [
      "Video Cameras",
      "Audio Equipment",
      "Mixing Equipment",
      "Encoders",
      "Control and Automation Equipment",
      "Mobile Live Streaming Equipment",
      "Streaming Equipment for Churches and Houses of Worship",
      "Video Streaming Accessories"
    ],
    images: [
      "https://images.unsplash.com/photo-1615458508880-ec0521ce754f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1647427854253-b92bb40c9330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG8lMjBzdHVkaW98ZW58MHx8MHx8fDA%3D",      
      "https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1664817550969-5e76adc4a3fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvJTIwc3R1ZGlvfGVufDB8fDB8fHww",
    ]
  }
]

module.exports = {
  heroData,
  talents,
  posts,
  rooms
};
