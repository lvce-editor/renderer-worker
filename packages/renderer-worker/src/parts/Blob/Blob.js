import * as NormalizeBlobError from '../NormalizeBlobError/NormalizeBlobError.js'
import { VError } from '../VError/VError.js'

export const base64StringToBlob = (base64String) => {
  try {
    // @ts-ignore
    return BlobUtil.base64StringToBlob(base64String)
  } catch (error) {
    const normalizedError = NormalizeBlobError.normalizeBlobError(error)
    throw new VError(normalizedError, 'Failed to convert base64 string to blob')
  }
}

export const binaryStringToBlob = async (string, type) => {
  try {
    // @ts-ignore
    return await BlobUtil.binaryStringToBlob(string, type)
  } catch (error) {
    const normalizedError = NormalizeBlobError.normalizeBlobError(error)
    throw new VError(normalizedError, 'Failed to convert binary string to blob')
  }
}

export const blobToBinaryString = async (blob) => {
  try {
    // @ts-ignore
    return await BlobUtil.blobToBinaryString(blob)
  } catch (error) {
    const normalizedError = NormalizeBlobError.normalizeBlobError(error)
    throw new VError(normalizedError, 'Failed to convert blob to binary string')
  }
}
