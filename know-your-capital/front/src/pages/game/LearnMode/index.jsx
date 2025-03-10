import { Capital } from "./Capital";
import { SearchTab } from "./SearchTab";

export function LearnMode() {
  let isSearched = true;

  return isSearched ? <Capital /> : <SearchTab />;
}
