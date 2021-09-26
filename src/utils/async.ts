export const promiseHandler = async <T>(
  promise: Promise<T>
): Promise<[T | null, any]> => {
  try {
    return [await promise, null]
  } catch (error) {
    return [null, error]
  }
}
