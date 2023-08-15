"use client";
import TimeAgo from "react-timeago";

export default function LiveTimestamp({ time }: { time: string }) {
  return <TimeAgo date={time} />;
}
