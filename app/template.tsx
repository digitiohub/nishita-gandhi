// Re-mounts on every navigation, so each page enters with the CSS crossfade in globals.css
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
