import {useLocation, useNavigate, useSearchParams} from "react-router";
import {Input} from "~/components/ui/input";

export function SearchInput() {
  let [searchParams] = useSearchParams();
  let name = searchParams.get("name");
  let navigate = useNavigate();
  let l = useLocation();
  const debouncedNavigate = debounce((value: string) => {
    let search = new URLSearchParams(l.search);
    search.set("name", value);
    if (search.get("page")) {
      search.delete("page");
    }
    navigate(`${l.pathname}?${search.toString()}`);
    if (value === "") {
      search.delete("name");
      navigate(`${l.pathname}?${search.toString()}`);
    }
  }, 300);

  return (
    <Input
      type="text"
      placeholder="Search by name..."
      defaultValue={name ?? undefined}
      onChange={(e) => {
        debouncedNavigate(e.target.value);
      }}
    />
  );
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type DebounceFunction = (...args: any[]) => void;

/**
 * Creates a debounced function that delays invoking the provided function until after the specified delay.
 *
 * @param fn - The function to debounce.
 * @param delay - The number of milliseconds to delay.
 * @returns A debounced version of the provided function.
 */
function debounce(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  fn: (...args: any[]) => void,
  delay: number
): DebounceFunction {
  let timeout: NodeJS.Timeout;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
