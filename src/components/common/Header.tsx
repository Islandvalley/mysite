import css from 'styled-jsx/css'

const styles = css`
  .header {
    background-color: #a6a6a6;
  }
`

const Header = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <header className="header">header</header>
    </>
  )
}

export default Header
