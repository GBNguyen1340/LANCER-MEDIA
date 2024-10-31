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
    imageUrl: "https://source.unsplash.com/1600x900?studio",
  },
  {
    id: 3,
    title:
      "Nhận booking studio và thiết bị livestream game, livestream bán hàng đa nền tảng.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "https://source.unsplash.com/1600x900?office",
  },
];

const talents = [
  {
    id: 1,
    name: "John Doe",
    followers: "40.000",
    views: "4000",
    image: "https://source.unsplash.com/900x900?profile",
  },
  {
    id: 2,
    name: "John Doe 2",
    followers: "50.000",
    views: "5000",
    image: "https://source.unsplash.com/900x900?9,girl-profiles",
  },
  {
    id: 3,
    name: "Jane Smith",
    followers: "40.000",
    views: "47000",
    image: "https://source.unsplash.com/900x900?8,girl-portrait",
  },
  {
    id: 4,
    name: "John Doe",
    followers: "40.000",
    views: "7000",
    image: "https://source.unsplash.com/900x900?7,girl-portrait",
  },
  {
    id: 5,
    name: "Jane Smith",
    followers: "70.000",
    views: "1000",
    image: "https://source.unsplash.com/900x900?6,girl-portrait",
  },
  {
    id: 6,
    name: "John Doe",
    followers: "40.000",
    views: "4000",
    image: "https://source.unsplash.com/900x900?5,girl-portrait",
  },
  {
    id: 7,
    name: "John Doe 2",
    followers: "50.000",
    views: "5000",
    image: "https://source.unsplash.com/900x900?4,girl-portrait",
  },
  {
    id: 8,
    name: "Jane Smith",
    followers: "40.000",
    views: "47000",
    image: "https://source.unsplash.com/900x900?3,girl-portrait",
  },
  {
    id: 9,
    name: "John Doe",
    followers: "40.000",
    views: "7000",
    image: "https://source.unsplash.com/900x900?1,girl,portrait",
  },
  {
    id: 10,
    name: "Jane Smith",
    followers: "70.000",
    views: "1000",
    image: "https://source.unsplash.com/900x900?2,girl,portrait",
  },
];

const posts = [
  {
    title: "Blog Post Title 1",
    summary:
      "This is a summary of blog post number 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishDate: "2024-03-13",
    image: "https://source.unsplash.com/900x900?office", // Example random image URL
  },
  {
    title: "Blog Post Title 2",
    summary:
      "This is a summary of blog post number 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishDate: "2024-03-13",
    image: "https://source.unsplash.com/900x900?1,office", // Example random image URL
  },
  {
    title: "Blog Post Title 3",
    summary:
      "This is a summary of blog post number 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishDate: "2024-03-13",
    image: "https://source.unsplash.com/900x900?2,office", // Example random image URL
  },
  {
    title: "Blog Post Title 4",
    summary:
      "This is a summary of blog post number 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    publishDate: "2024-03-13",
    image: "https://source.unsplash.com/900x900?3,office", // Example random image URL
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
      "https://source.unsplash.com/900x900?2,studio",
      "https://source.unsplash.com/900x900?3,studio",
      "https://source.unsplash.com/900x900?4,studio",
      "https://source.unsplash.com/900x900?5,studio",
      "https://source.unsplash.com/900x900?6,studio",
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
      "https://source.unsplash.com/900x900?7,studio",
      "https://source.unsplash.com/900x900?8,studio",
      "https://source.unsplash.com/900x900?9,studio",
      "https://source.unsplash.com/900x900?10,studio",
      "https://source.unsplash.com/900x900?21,studio",
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
      "https://source.unsplash.com/900x900?12,studio",
      "https://source.unsplash.com/900x900?22,studio",
      "https://source.unsplash.com/900x900?32,studio",
      "https://source.unsplash.com/900x900?42,studio",
      "https://source.unsplash.com/900x900?52,studio",
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
      "https://source.unsplash.com/900x900?34,studio",
      "https://source.unsplash.com/900x900?62,studio",
      "https://source.unsplash.com/900x900?52,studio",
      "https://source.unsplash.com/900x900?92,studio",
      "https://source.unsplash.com/900x900?23,studio",
    ]
  }
]

module.exports = {
  heroData,
  talents,
  posts,
  rooms
};
