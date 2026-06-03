"use client";

import MarqueeStrip from "./MarqueeStrip";

export default function WorksWith() {
  return (
    <MarqueeStrip
      duration={34}
      rows={[
        { filter: "channel", label: "Channels — meet Headmaster where teams communicate" },
        { filter: "connector", label: "Tools — documents, calendars, browsers, and work systems" },
        { filter: "model", label: "Models — route work to the right provider" },
      ]}
    />
  );
}
