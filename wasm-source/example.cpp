#include <emscripten.h>

extern "C" {

EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
int subtract(int a, int b) {
    return a - b;
}

EMSCRIPTEN_KEEPALIVE
int sumElements(int *array, int size) {
    int total = 0;
    for (int i = 0; i < size; i++) {
        total += array[i];
    }
    return total;
}

EMSCRIPTEN_KEEPALIVE
void sumTwoArrays(int *a, int *b, int *res, int size) {
    for (int i = 0; i < size; ++i) {
        res[i] = a[i] * b[i];
    }
}

EMSCRIPTEN_KEEPALIVE
void applyThreshold(int *input, int *output, int size, int th) {
    for (int i = 0; i < size; ++i) {
        if (input[i] < th) {
            output[i] = 0;
        } else {
            output[i] = 255;
        }
    }
}
}