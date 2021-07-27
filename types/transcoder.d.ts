

export declare class CiqTranscoder {
  // encode 
  encode(buffer: Buffer, serialNumber: Number): void

  // decode
  decode(buffer: Buffer): void

  // get package length
  getPackageLength(buffer: Buffer): void
}
export declare interface TranscoderInterface extends CiqTranscoder {

}