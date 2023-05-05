// import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [A, setA] = useState(0)
  const [B, setB] = useState(0)
  const [C, setC] = useState(0)
  const [D, setD] = useState(0)

  const [showDebug, setShowDebug] = useState(false)

  const artikelAlgorithm = (a, b, c, d) => {
    const xbocx = !(b || c)
    const xbnc = !b && c
    const anxd = a && !d
    const bnc = b && c

    const isDer = (xbocx && !(a || d)) || (bnc && !anxd)
    const isDie = b && !c
    const isDas = a && xbocx

    const isDen = (xbocx && !a && d) || (bnc && anxd)
    const isDem = xbnc && !d
    const isDes = xbnc && d

    return { isDer, isDie, isDas, isDen, isDem, isDes }
  }

  const selectedArtikel = () => {
    const { isDer, isDie, isDas, isDen, isDem, isDes } = artikelAlgorithm(A, B, C, D)

    if (isDer) return 'der'
    if (isDie) return 'die'
    if (isDas) return 'das'
    if (isDen) return 'den'
    if (isDem) return 'dem'
    if (isDes) return 'des'
    return 'error'
  }

  const generateArtikel = (a, b, c, d) => {
    // for testing
    const { isDer, isDie, isDas, isDen, isDem, isDes } = artikelAlgorithm(a, b, c, d)

    if (isDer) return 'der'
    if (isDie) return 'die'
    if (isDas) return 'das'
    if (isDen) return 'den'
    if (isDem) return 'dem'
    if (isDes) return 'des'
    return 'error'
  }

  const selectMasc = () => {
    setA(0)
    setB(0)
  }

  const selectFem = () => {
    setA(0)
    setB(1)
  }

  const selectNeut = () => {
    setA(1)
    setB(0)
  }

  const selectPlural = () => {
    setA(1)
    setB(1)
  }

  const selectNominativ = () => {
    setC(0)
    setD(0)
  }

  const selectAkkusativ = () => {
    setC(0)
    setD(1)
  }

  const selectDativ = () => {
    setC(1)
    setD(0)
  }

  const selectGenitiv = () => {
    setC(1)
    setD(1)
  }

  const DefaultButton = ({ text, onClick, isActive = false }) => (
    <button
      className={`btn btn-primary`}
      style={{ color: isActive ? 'red' : 'black' }}
      onClick={onClick}>
      {text}
    </button>
  )

  return (
    <div className="App">
      <h1>Der Artikel-Selector</h1>
      <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="row">
          <h2>Gender</h2>
          <div className="row">
            <DefaultButton text="Masc" onClick={selectMasc} isActive={!A && !B} />
            <DefaultButton text="Fem" onClick={selectFem} isActive={!A && B} />
            <DefaultButton text="Neut" onClick={selectNeut} isActive={A && !B} />
            <DefaultButton text="Plural" onClick={selectPlural} isActive={A && B} />
          </div>
          <h2>Kasus</h2>
          <div className="row">
            <DefaultButton text="Nominativ" onClick={selectNominativ} isActive={!C && !D} />
            <DefaultButton text="Akkusativ" onClick={selectAkkusativ} isActive={!C && D} />
            <DefaultButton text="Dativ" onClick={selectDativ} isActive={C && !D} />
            <DefaultButton text="Genitiv" onClick={selectGenitiv} isActive={C && D} />
          </div>
        </div>
      </div>

      <h3>which gives</h3>

      <h1 style={{ borderStyle: 'solid' }}>{selectedArtikel()}</h1>

      <button onClick={() => setShowDebug(!showDebug)}>show debug output</button>

      {showDebug && (
        <>
          <p>debug</p>
          <p>
            isA: {A}, isB: {B}, isC: {C}, isD: {D}
          </p>

          <p>debug table</p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Nominativ</th>
                <th>Akkusativ</th>
                <th>Dativ</th>
                <th>Genitiv</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Masc</td>
                <td>{generateArtikel(0, 0, 0, 0)}</td>
                <td>{generateArtikel(0, 0, 0, 1)}</td>
                <td>{generateArtikel(0, 0, 1, 0)}</td>
                <td>{generateArtikel(0, 0, 1, 1)}</td>
              </tr>
              <tr>
                <td>Fem</td>
                <td>{generateArtikel(0, 1, 0, 0)}</td>
                <td>{generateArtikel(0, 1, 0, 1)}</td>
                <td>{generateArtikel(0, 1, 1, 0)}</td>
                <td>{generateArtikel(0, 1, 1, 1)}</td>
              </tr>
              <tr>
                <td>Neut</td>
                <td>{generateArtikel(1, 0, 0, 0)}</td>
                <td>{generateArtikel(1, 0, 0, 1)}</td>
                <td>{generateArtikel(1, 0, 1, 0)}</td>
                <td>{generateArtikel(1, 0, 1, 1)}</td>
              </tr>
              <tr>
                <td>Plural</td>
                <td>{generateArtikel(1, 1, 0, 0)}</td>
                <td>{generateArtikel(1, 1, 0, 1)}</td>
                <td>{generateArtikel(1, 1, 1, 0)}</td>
                <td>{generateArtikel(1, 1, 1, 1)}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default App

