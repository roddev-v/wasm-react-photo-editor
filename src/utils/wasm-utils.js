export async function loadExampleWasm() {
  const memory = new WebAssembly.Memory({initial: 256, maximum: 256});
  const table = new WebAssembly.Table({initial: 0, maximum: 0, element: 'anyfunc'});
  const importObject = {
    env: {
      '__linear_memory': memory,
      '__indirect_function_table': table
    },
    wasi_snapshot_preview1: {
      'proc_exit': () => {
      }
    },
  }
  const responsePromise = await fetch('./wasm/example.wasm')
  const buffer = await responsePromise.arrayBuffer();
  return await WebAssembly.instantiate(buffer, importObject);
}
