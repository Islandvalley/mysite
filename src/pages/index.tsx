import css from 'styled-jsx/css'

const styles = css`
  .main {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  }
`

const Home = () => {
  return (
    <>
      <style jsx>{styles}</style>
      <main className="main">
        <h1>🚧工事中</h1>
      </main>
    </>
  )
}

export default Home
