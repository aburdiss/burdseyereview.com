import './Layout.css'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="layout-container">{children}</div>
}
