import { Image } from "next-sanity/image";
import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  priority?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <Image
      className="object-cover" 
      width={800} 
      height={400} 
      alt={source?.alt || ""}
      src={urlForImage(source)?.height(400).width(800).url() as string}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "50%" }} />
  );

  return (
    <div className="shadow-md transition-shadow duration-200 hover:shadow-lg"> 
      {image}
    </div>
  );
}
