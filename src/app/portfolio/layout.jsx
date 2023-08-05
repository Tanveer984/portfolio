import './portfolio.scss'

export default function Layout({children}) {
  return (
    <div>
        <h1 className="mainTitle">Our Works</h1>
        {children}
    </div>
  )
}
