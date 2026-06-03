"use client";

import MarqueeStrip from "./MarqueeStrip";

export default function WorksWith() {
  return (
    <MarqueeStrip
      duration={34}
      rows={[
        { filter: "channel", label: "Gateways — reach Headmaster anywhere" },
        { filter: "model", label: "Providers — the models it runs on" },
        { filter: "connector", label: "Connectors & MCP — the systems it works in" },
      ]}
    />
  );
}
