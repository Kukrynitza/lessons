import { Link } from 'react-router'

export default function Main() {
  return (
    <>
      <title>Main</title>
      <Link to="/CreateCategory">CreateCategory</Link>
      <Link to="/CategoryList">CategoryList</Link>
    </>
  )
}
