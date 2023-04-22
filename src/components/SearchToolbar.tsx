import * as Toolbar from "@radix-ui/react-toolbar";
import * as Toggle from "@radix-ui/react-toggle";
import { MagnifyingGlass, ArrowsDownUp } from "phosphor-react";
import {
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { postsDataProps } from "../../pages/blog";

interface SearchToolbarProps {
  setFilteredPosts: Dispatch<SetStateAction<postsDataProps>>;
  postsData: postsDataProps;
}

export default function SearchToolbar({
  setFilteredPosts,
  postsData,
}: SearchToolbarProps) {
  const [orderedBy, setOrderedBy] = useState<"newest" | "oldest">("newest");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const tags = postsData
    .map(({ data }) => data.tags)
    .reduce((prevArray, crrArray) => prevArray.concat(crrArray))
    .filter((tag, index, tagsArray) => tagsArray.indexOf(tag) === index);

  useEffect(() => {
    let filteredPosts = postsData;

    if (activeTags.length > 0) {
      filteredPosts = sort(
        postsData.filter(({ data }) => {
          return activeTags.every(tag => data.tags.includes(tag));
        }),
        orderedBy
      );
    } else {
      filteredPosts = sort(postsData, orderedBy);
    }

    if (searchValue !== "") {
      filteredPosts = filteredPosts.filter(({ data, id, excerpt }) => {
        return (
          data.title
            .toLowerCase()
            .includes(searchValue.toLowerCase().replaceAll(/\s+/g, " ")) ||
          id
            .toLowerCase()
            .includes(searchValue.toLowerCase().replaceAll(/\s+/g, " ")) ||
          excerpt
            .toLowerCase()
            .includes(searchValue.toLowerCase().replaceAll(/\s+/g, " "))
        );
      });
    }

    setFilteredPosts(filteredPosts);
  }, [activeTags, orderedBy, searchValue]);

  return (
    <Toolbar.Root
      id="searchDiv"
      className="flex flex-col items-center md:flex-row md:justify-between md:gap-3 gap-5 md:items-start w-full"
    >
      <Toolbar.ToggleGroup
        type="multiple"
        orientation="horizontal"
        className="flex justify-center md:justify-start gap-3 w-fit flex-wrap"
        onValueChange={setActiveTags}
      >
        {tags.map(tag => (
          <TagFilter key={tag}>{tag}</TagFilter>
        ))}
      </Toolbar.ToggleGroup>

      <ToggleFilter setOrderedBy={setOrderedBy} />

      <div
        id="search"
        className="flex items-center justify-center border-2 p-2 px-3 gap-2 border-zinc-700 hover:border-orange-600 transition-colors bg-zinc-800 md:rounded-full rounded-xl md:w-auto w-full"
      >
        <div className="flex items-center justify-center">
          <MagnifyingGlass className="text-zinc-50" size={18} />
        </div>
        <input
          type="text"
          placeholder="Search an article..."
          className="bg-transparent w-full outline-none text-zinc-50 rounded-r-full"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
    </Toolbar.Root>
  );
}

interface ToogleFilterProps {
  setOrderedBy: Dispatch<SetStateAction<"newest" | "oldest">>;
}

function ToggleFilter({ setOrderedBy }: ToogleFilterProps) {
  const [isPressed, setIsPressed] = useState(false);

  setOrderedBy(isPressed ? "oldest" : "newest");

  return (
    <Toggle.Root
      onPressedChange={setIsPressed}
      className="group flex w-full justify-center md:w-auto gap-2 text-zinc-50 text-sm data-[state=on]:bg-orange-600 bg-zinc-800 p-3 px-4 md:rounded-full rounded-xl transition-colors"
    >
      <ArrowsDownUp
        size={20}
        className="group-data-[state=on]:rotate-180 transition-transform"
      />
      <span>{isPressed ? "Oldest" : "Newest"}</span>
    </Toggle.Root>
  );
}

interface TagFilterProps {
  children: ReactNode;
}

function TagFilter({ children }: TagFilterProps) {
  if (!children) return null;

  const value = children.toString().toLowerCase().replaceAll(" ", "-");

  return (
    <Toolbar.ToggleItem
      value={value}
      className={
        "data-[state=on]:bg-orange-600 data-[state=on]:border-orange-600 data-[state=on]:hover:bg-orange-700 data-[state=on]:hover:border-orange-700 bg-zinc-800 p-1 flex items-center justify-center rounded-xl border-2 border-zinc-800 hover:border-zinc-500 transition-colors text-zinc-300 h-12 flex-1 md:flex-none md:h-4/5 px-4"
      }
    >
      <span className="first-letter:uppercase">{children}</span>
    </Toolbar.ToggleItem>
  );
}

function sort(arr: postsDataProps, type: "newest" | "oldest") {
  switch (type) {
    case "newest":
      return arr.slice().sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
    case "oldest":
      return arr.slice().sort((a, b) => (a.data.date > b.data.date ? 1 : -1));
  }
}
