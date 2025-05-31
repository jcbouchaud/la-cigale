import Image from "next/image";
import Link from "next/link";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
}

const getInstagramFeed = async () => {
  return {
    data: [
      {
        id: "1",
        caption: "Caption 1",
        media_url: "https://picsum.photos/200/200",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
      {
        id: "2",
        caption: "Caption 2",
        media_url: "https://picsum.photos/200/201",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
      {
        id: "3",
        caption: "Caption 3",
        media_url: "https://picsum.photos/200/202",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
      {
        id: "4",
        caption: "Caption 4",
        media_url: "https://picsum.photos/200/203",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
      {
        id: "5",
        caption: "Caption 5",
        media_url: "https://picsum.photos/200/204",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
      {
        id: "6",
        caption: "Caption 6",
        media_url: "https://picsum.photos/200/205",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
      {
        id: "7",
        caption: "Caption 7",
        media_url: "https://picsum.photos/200/206",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
      {
        id: "8",
        caption: "Caption 8",
        media_url: "https://picsum.photos/200/207",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
      {
        id: "9",
        caption: "Caption 9",
        media_url: "https://picsum.photos/200/208",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
      {
        id: "10",
        caption: "Caption 10",
        media_url: "https://picsum.photos/200/209",
        media_type: "IMAGE",
        timestamp: "2021-01-01",
        permalink: "https://www.instagram.com/p/1234567890/",
      },
    ],
  };
};

export default async function InstaFeed() {
  const instagramFeed = await getInstagramFeed();

  return (
    <>
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-5 gap-4">
        {instagramFeed.data.map((post: InstagramPost) => (
          <div key={post.id} className="relative group w-full">
            <Link
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              {post.media_type === "VIDEO" ? (
                <video
                  src={post.media_url}
                  controls={false}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={post.media_url}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                  priority
                />
              )}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-background/50 bg-opacity-50 flex items-center justify-center p-4 w-full h-full">
                <p className="text-white text-center text-xs truncate">
                  {post.caption}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
