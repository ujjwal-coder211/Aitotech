/**
 * Demo previews are full mock client sites with no AitoTech chrome. The root
 * layout no longer supplies a <main>, so give them their landmark here.
 */
export default function DemoPreviewLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
