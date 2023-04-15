import dayjs from "dayjs";
import Link from "next/link";

interface PostPreviewProps {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

export default function PostPreview({
  date,
  title,
  excerpt,
  slug,
}: PostPreviewProps) {
  return (
    <Link href={`blog/${slug}`}>
      <article className="hover:bg-zinc-800 relative text-zinc-50 rounded-xl p-3 w-full transition-colors before:block before:absolute before:left-[-14px] md:before:left-[-42px] before:rounded-bl-2xl before:top-1/2 before:-translate-y-1/2 before:border-b-2 before:border-l-2 before:border-zinc-700 before:h-3 before:w-5 md:before:h-10 md:before:w-10">
        <time
          dateTime={dayjs(date).toISOString()}
          className="md:text-xs text-sm text-zinc-600"
        >
          {dayjs(date).format("MMMM DD, YYYY")}
        </time>
        <h3 className="md:text-lg text-xl text-orange-600 font-semibold text-ellipsis line-clamp-1">
          {title}
        </h3>
        <p className="text-zinc-200 md:text-sm text-base text-ellipsis line-clamp-3">
          {excerpt}
        </p>
      </article>
    </Link>
  );
}
