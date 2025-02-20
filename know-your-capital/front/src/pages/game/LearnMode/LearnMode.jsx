import { Capital } from "./Capital/Capital";
import { SearchTab } from "./SearchTab/SearchTab";

export function LearnMode() {
  let isSearched = true;

  return isSearched ? <Capital /> : <SearchTab />;
}
