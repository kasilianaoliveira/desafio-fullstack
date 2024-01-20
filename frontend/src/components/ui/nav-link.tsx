import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      {...props}
      className=" gap-1.6 flex items-center text-sm font-medium  text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
    />
  )
}
