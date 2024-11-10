import { format } from "date-fns";

export default function DateComponent({ dateString }: { dateString?: string }) {
  if (!dateString) {
    return <time>Date TBD</time>;
  }

  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "LLLL d, yyyy")}
    </time>
  );
}
