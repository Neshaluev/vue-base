import { Ref, ref } from "vue";

export function useState<T, R = Ref<T>>(
  defaultValue?: T | (() => T)
): [R, (val: T) => void] {
  const innerValue =
    typeof defaultValue === "function" ? (defaultValue as any)() : defaultValue;

  const state = ref(innerValue) as Ref<T>;

  function setState(newValue: any) {
    state.value = newValue;
  }

  return [state as unknown as R, setState];
}
