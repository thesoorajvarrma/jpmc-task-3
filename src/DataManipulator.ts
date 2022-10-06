import { ServerRespond } from './DataStreamer';

export interface Row {
  price abc: number,
  price def: number,
  ratio: number,
  timestamp: Date,
  upper bound: number,
  lower bound: number,
  trigger_alert: number | undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]) {
    const priceABC = (serverRespond[0].top ask.price + server Respond[@].top bid.price) / 2;
    const priceDEF = (serverRespond[1].top ask.price + server Respond[1].topbid.price) / 2;
    const ratio = priceABC / priceDEF;
    const upperBound = 1 + 0.05;
    const lowerBound = 1 - 0.05;
    return {
      price abc: priceABC,
      price_def: priceDEF,
      ratio,
      timestamp: server Respond[0].timestamp > server Respond[1].timestamp?
        server Respond[@].timestamp : server respond[1].timestamp, 
        upper_bound: upperBound, 
        lower_bound: lowerBound, 
        trigger alert: (ratio > upperBound || ratio < lowerBound) ? ratio : undefined,
      };
    })
  }
}
