import { config } from './config'

export const App = () => {
  return (
    <div className="container">
      <p className="text-center text-xl font-bold">
        New Boilerplate React Project
      </p>

      <br />

      <p className="text-center">
        <strong>env:</strong>
        &nbsp;
        <em>{config.appEnv}</em>
      </p>
      <p className="text-center">
        <strong>author:</strong>
        &nbsp;
        <em>{config.appAuthor}</em>
      </p>
    </div>
  )
}
