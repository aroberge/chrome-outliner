# chrome-outliner

Experimental Chrome extension to turn a page into an interactive outliner.

When activated, you can click on html header tags (h1 to h6) and the content
below will be hidden (folded) until a tag of the same level is reached.

Similarly, lists (ordered and unordered will be folded/unfolded)

To activate the extension on a given page, click on its icon; it will
change colour to indicate that it is activated.

### Improvements needed


- The cursor style is a pointer anywhere inside any list item containing a sublist instead of
  changing back when a sublist item does not have children.
- The styling could be greatly improved.

![demo](https://github.com/aroberge/chrome-outliner/blob/master/outliner.gif)
