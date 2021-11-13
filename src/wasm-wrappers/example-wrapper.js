export class ExampleWrapper {

  static get example() {
    return window.wasm.example
  }

  static get memory() {
    return this.example.instance.exports.memory;
  }

  static add(a, b) {
    const {add} = this.example.instance.exports;
    return add(a, b);
  }

  static subtract(a, b) {
    const {subtract} = this.example.instance.exports;
    return subtract(a, b);
  }

  static sumOfElements(array) {
    const buffer = this.memory.buffer;
    const size = array.length;
    const newArray = new Int32Array(buffer, 0, size);
    newArray.set(array);
    const {sumElements} = this.example.instance.exports;
    return sumElements(array.byteOffset, size);
  }

  static addTwoArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return [];
    }

    const length = arr1.length;
    const buffer = this.memory.buffer;

    let offset = 0
    const array1 = new Int32Array(buffer, offset, length)
    array1.set(arr1)

    offset += length * Int32Array.BYTES_PER_ELEMENT
    const array2 = new Int32Array(buffer, offset, length)
    array2.set(arr2)

    offset += length * Int32Array.BYTES_PER_ELEMENT
    const result = new Int32Array(buffer, offset, length)

    const {sumTwoArrays} = this.example.instance.exports;
    sumTwoArrays(array1.byteOffset, array2.byteOffset, result.byteOffset, length);

    return Array.from(result);
  }

  static applyTh(arr, th) {
    const buffer = this.memory.buffer;

    let offset = 0
    const arrayInput = new Int32Array(buffer, offset, arr.length)
    arrayInput.set(arr)

    offset += arr.length * Int32Array.BYTES_PER_ELEMENT
    const result = new Int32Array(buffer, offset, arr.length)

    const {applyThreshold} = this.example.instance.exports;
    applyThreshold(arrayInput.byteOffset, result.byteOffset, arr.length, th);

    return Array.from(result);
  }
}
