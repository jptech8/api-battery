import * as morgan from 'morgan';
import { color } from 'console-log-colors';


const morganLogger = morgan(
    //'[:date[clf]] ":method :url HTTP/:http-version" :status  :res[content-length] ":referrer" ":user-agent :response-time ms'
function (tokens, req, res) {
    return [
        color.magenta(new Date().toLocaleString()),
        color.yellow(tokens.method(req, res)),
        color.blue(tokens.url(req, res)),
      color.greenBright(tokens.status(req, res)),
      color.red((tokens.res(req, res, 'content-length'), '-')),
      color.green((tokens['response-time'](req, res), 'ms'))
    ].join(' ')
  }
)
  export {morganLogger};