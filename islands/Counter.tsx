import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import * as mui from "https://esm.sh/@mui/material?alias=react:preact/compat,react/jsx-runtime:preact/compat/jsx-runtime&deps=preact&target=es2022";
import { IS_BROWSER } from "$fresh/runtime.ts";


interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  if (!IS_BROWSER) {
    return <p>Counter: {props.count}</p>;
  }
  return (
    <mui.Button variant="contained" onClick={() => props.count.value += 1}>
      +1
    </mui.Button>
  );
}
