
# Filter Provider

### Usage

```
import {FilterProvider, withFilters} from "app/context/data/FilterProvider/FilterProvider";

// using Provider:
return (
  <FilterProvider {...config}>
    ...
  </FilterProvider>
);

// using High Order Component (HoC):
export default withFilters(ViewProjects, config);
```

### Config

```
const config = {
  filterMode: "combined", //default
  applyproductauto' //default ['auto', 'manual']
}
```
**mode** (enum):
- "combined" - state + url params (url params with higher priority)
- "url" - url params only
- "state" - state only

**applyMode**(enum):
- "auto" - automatically sets filter
- "manual" - user need to call apply() method


### Hooks

**Get all filters** (as an Object)
```
const filters = useFilters();
```

**Get all applied filters** (only if filterMode set to "manual")
```
const filters = useAppliedFilters();
```

**Get single filter key**
```

```

**Get context**
```
const {
  mode, // current mode
  setFilter, // setFilter(name, value, config) // set single value
  setFilters, // setFilters(newState, config) // set multiple values
  apply, //apply() // aplly filters when manual mode is ON
  clear, //clear() // clear all params
} = useFiltersContext();
```
