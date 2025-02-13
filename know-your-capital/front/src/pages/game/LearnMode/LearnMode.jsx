import { Capital } from "./Capital/Capital";
import { SearchTab } from "./SearchTab/SearchTab";

export function LearnMode() {
  let isSearched = false;

  return isSearched ? <Capital /> : <SearchTab />;
}
