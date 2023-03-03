import styles from './index.module.less'

const App = () => {
  console.log(process.env)
  return (
    <div>
      <div className={styles.box}>
        <span>123</span>
      </div>
      <div className="box"></div>
      123 123 123
    </div>
  )
}

export default App
